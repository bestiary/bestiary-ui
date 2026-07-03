<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { PaginatorProps, PaginatorState } from './paginator.props';

defineOptions({ name: 'BPaginator' });

const props = withDefaults(defineProps<PaginatorProps>(), {
    totalRecords: 0,
    rows: 10,
    first: 0,
    pageLinkSize: 5,
    template: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
    currentPageReportTemplate: '({currentPage} of {totalPages})',
    showFirstLastIcon: true,
    showPrevNextIcon: true,
    alwaysShow: true
});

const emit = defineEmits<{
    (e: 'page', state: PaginatorState): void;
}>();

const firstValue = defineModel<number>('first', { default: 0 });
const rowsValue = defineModel<number>('rows', { default: 10 });

defineSlots<{
    start?: (props: Record<string, never>) => any;
    end?: (props: Record<string, never>) => any;
    container?: (props: {
        first: number;
        last: number;
        rows: number;
        page: number;
        pageCount: number;
        totalRecords: number;
        firstPageCallback: () => void;
        lastPageCallback: () => void;
        prevPageCallback: () => void;
        nextPageCallback: () => void;
        rowChangeCallback: (value: number) => void;
    }) => any;
}>();

/* --- Calculations --- */
const safeRows = computed(() => rowsValue.value || 1); // Prevent division by zero
const pageCount = computed(() => Math.ceil(props.totalRecords / safeRows.value) || 1);
const page = computed(() => Math.floor(firstValue.value / safeRows.value));

const firstIdx = computed(() => firstValue.value + 1);
const lastIdx = computed(() => Math.min(firstValue.value + safeRows.value, props.totalRecords));

/* --- Navigation Methods --- */
const changePage = (p: number) => {
    if (p >= 0 && p < pageCount.value) {
        const newFirst = p * safeRows.value;
        firstValue.value = newFirst;
        emit('page', { first: newFirst, rows: safeRows.value, page: p, pageCount: pageCount.value });
    }
};

const onRowsChange = (value: number) => {
    if (value <= 0) return;
    const newFirst = Math.floor(firstValue.value / value) * value;
    rowsValue.value = value;
    firstValue.value = newFirst;
    emit('page', {
        first: newFirst,
        rows: value,
        page: Math.floor(newFirst / value),
        pageCount: Math.ceil(props.totalRecords / value)
    });
};

/* --- Headless Context --- */
const slotProps = computed(() => ({
    first: firstIdx.value,
    last: lastIdx.value,
    rows: safeRows.value,
    page: page.value,
    pageCount: pageCount.value,
    totalRecords: props.totalRecords,
    firstPageCallback: () => changePage(0),
    lastPageCallback: () => changePage(pageCount.value - 1),
    prevPageCallback: () => changePage(page.value - 1),
    nextPageCallback: () => changePage(page.value + 1),
    rowChangeCallback: (val: number) => onRowsChange(val)
}));

/* --- Responsive & Template Logic --- */
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0);
const updateWidth = () => { windowWidth.value = window.innerWidth; };

onMounted(() => { window.addEventListener('resize', updateWidth); });
onUnmounted(() => { window.removeEventListener('resize', updateWidth); });

const currentTemplateString = computed(() => {
    if (typeof props.template === 'string') return props.template;
    const breakpoints = Object.keys(props.template).filter(k => k !== 'default').sort((a, b) => parseInt(a) - parseInt(b));
    for (const bp of breakpoints) { if (windowWidth.value <= parseInt(bp)) return props.template[bp]; }
    return props.template.default || '';
});

const templateItems = computed(() => {
    const str = currentTemplateString.value;
    return str ? str.split(' ').map(s => s.trim()).filter(Boolean) : [];
});

const reportText = computed(() => {
    if (!props.currentPageReportTemplate) return '';
    return props.currentPageReportTemplate
        .replace('{first}', firstIdx.value.toString())
        .replace('{last}', lastIdx.value.toString())
        .replace('{rows}', safeRows.value.toString())
        .replace('{totalRecords}', props.totalRecords.toString())
        .replace('{currentPage}', (page.value + 1).toString())
        .replace('{totalPages}', pageCount.value.toString());
});

const pageLinks = computed(() => {
    const total = pageCount.value;
    const current = page.value;
    const size = props.pageLinkSize;
    let start = Math.max(0, Math.min(current - Math.floor(size / 2), total - size));
    let end = Math.min(total, start + size);
    if (total <= size) { start = 0; end = total; }
    return Array.from({ length: end - start }, (_, i) => start + i);
});

const isFirstPage = computed(() => page.value === 0);
const isLastPage = computed(() => page.value === pageCount.value - 1 || pageCount.value === 0);

const icons = {
    first: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41M6 6h2v12H6V6z",
    prev: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z",
    next: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",
    last: "M5.59 16.59L10.18 12 5.59 7.41 7 6l6 6-6 6-1.41-1.41M16 6h2v12h-2V6z"
};
</script>

<template>
    <nav v-if="alwaysShow || pageCount > 1" class="b-paginator" aria-label="Pagination">
        <slot v-if="$slots.container" name="container" v-bind="slotProps" />

        <template v-else>
            <slot name="start" />

            <div class="b-paginator__content">
                <template v-for="item in templateItems" :key="item">

                    <button v-if="item === 'FirstPageLink' && showFirstLastIcon"
                            class="b-paginator__button b-paginator__button--first"
                            :disabled="isFirstPage"
                            aria-label="Go to first page"
                            @click="changePage(0)">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path :d="icons.first"/></svg>
                    </button>

                    <button v-if="item === 'PrevPageLink' && showPrevNextIcon"
                            class="b-paginator__button b-paginator__button--prev"
                            :disabled="isFirstPage"
                            aria-label="Go to previous page"
                            @click="changePage(page - 1)">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path :d="icons.prev"/></svg>
                    </button>

                    <div v-if="item === 'PageLinks'" class="b-paginator__pages">
                        <button v-for="p in pageLinks" :key="p"
                                :class="['b-paginator__button b-paginator__page', { 'b-paginator__page--active': p === page }]"
                                :aria-label="`Page ${p + 1}`"
                                :aria-current="p === page ? 'page' : undefined"
                                @click="changePage(p)">
                            {{ p + 1 }}
                        </button>
                    </div>

                    <button v-if="item === 'NextPageLink' && showPrevNextIcon"
                            class="b-paginator__button b-paginator__button--next"
                            :disabled="isLastPage"
                            aria-label="Go to next page"
                            @click="changePage(page + 1)">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path :d="icons.next"/></svg>
                    </button>

                    <button v-if="item === 'LastPageLink' && showFirstLastIcon"
                            class="b-paginator__button b-paginator__button--last"
                            :disabled="isLastPage"
                            aria-label="Go to last page"
                            @click="changePage(pageCount - 1)">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path :d="icons.last"/></svg>
                    </button>

                    <select v-if="item === 'RowsPerPageDropdown' && rowsPerPageOptions?.length"
                            class="b-paginator__select"
                            :value="rowsValue"
                            aria-label="Rows per page"
                            @change="(e) => onRowsChange(parseInt((e.target as HTMLSelectElement).value))">
                        <option v-for="option in rowsPerPageOptions" :key="option" :value="option">{{ option }}</option>
                    </select>

                    <span v-if="item === 'CurrentPageReport'" class="b-paginator__report" aria-live="polite">
                        {{ reportText }}
                    </span>

                    <div v-if="item === 'JumpToPageInput'" class="b-paginator__jump">
                        <input
                            type="number"
                            class="b-paginator__input"
                            :value="page + 1"
                            min="1"
                            :max="pageCount"
                            aria-label="Jump to page"
                            @change="(e) => changePage(parseInt((e.target as HTMLInputElement).value) - 1)"
                        />
                    </div>

                </template>
            </div>

            <slot name="end" />
        </template>
    </nav>
</template>