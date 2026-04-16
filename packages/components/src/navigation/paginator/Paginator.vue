<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { PaginatorProps, PaginatorState } from './paginator.props';

defineOptions({ name: 'BPaginator' });

const props = withDefaults(defineProps<PaginatorProps>(), {
    totalRecords: 0,
    rows: 10,
    first: 0,
    pageLinkSize: 5,
    template: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
    currentPageReportTemplate: "({currentPage} of {totalPages})",
    showFirstLastIcon: true,
    showPrevNextIcon: true,
    alwaysShow: true
});

const emit = defineEmits<{
    (e: 'page', state: PaginatorState): void;
}>();

const firstValue = defineModel<number>('first', { default: 0 });
const rowsValue = defineModel<number>('rows', { default: 10 });

/**
 * Component slots documentation
 */
defineSlots<{
    /** Custom start content */
    start?: (props: {}) => any;
    /** Custom end content */
    end?: (props: {}) => any;
    /** Headless container slot to implement entire UI */
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
const pageCount = computed(() => Math.ceil(props.totalRecords / rowsValue.value) || 1);
const page = computed(() => Math.floor(firstValue.value / rowsValue.value));

const firstIdx = computed(() => firstValue.value + 1);
const lastIdx = computed(() => Math.min(firstValue.value + rowsValue.value, props.totalRecords));

/* --- Navigation Methods --- */
const changePage = (p: number) => {
    if (p >= 0 && p < pageCount.value) {
        const newFirst = p * rowsValue.value;
        firstValue.value = newFirst;
        emit('page', { first: newFirst, rows: rowsValue.value, page: p, pageCount: pageCount.value });
    }
};

const onRowsChange = (value: number) => {
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
    rows: rowsValue.value,
    page: page.value,
    pageCount: pageCount.value,
    totalRecords: props.totalRecords,
    firstPageCallback: () => changePage(0),
    lastPageCallback: () => changePage(pageCount.value - 1),
    prevPageCallback: () => changePage(page.value - 1),
    nextPageCallback: () => changePage(page.value + 1),
    rowChangeCallback: (val: number) => onRowsChange(val)
}));

/* --- Responsive & Template Logic (з минулого кроку) --- */
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0);
const updateWidth = () => { windowWidth.value = window.innerWidth; };

onMounted(() => { window.addEventListener('resize', updateWidth); });
onUnmounted(() => { window.removeEventListener('resize', updateWidth); });

const currentTemplateString = computed(() => {
    if (typeof props.template === 'string') return props.template;
    const templateObj = props.template as Record<string, string>;
    const breakpoints = Object.keys(templateObj).filter(k => k !== 'default').sort((a, b) => parseInt(a) - parseInt(b));
    for (const bp of breakpoints) { if (windowWidth.value <= parseInt(bp)) return templateObj[bp]; }
    return templateObj.default || '';
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
        .replace('{rows}', rowsValue.value.toString())
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
const isLastPage = computed(() => page.value === pageCount.value - 1);

const icons = {
    first: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41M6 6h2v12H6V6z",
    prev: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z",
    next: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",
    last: "M5.59 16.59L10.18 12 5.59 7.41 7 6l6 6-6 6-1.41-1.41M16 6h2v12h-2V6z"
};
</script>

<template>
    <nav v-if="alwaysShow || pageCount > 1" class="b-paginator">
        <!-- HEADLESS MODE -->
        <slot v-if="$slots.container" name="container" v-bind="slotProps" />

        <!-- DEFAULT UI -->
        <template v-else>
            <slot name="start" />

            <div class="b-paginator__content">
                <template v-for="item in templateItems" :key="item">

                    <button v-if="item === 'FirstPageLink' && showFirstLastIcon"
                            class="b-paginator__button" :disabled="isFirstPage" @click="changePage(0)">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path :d="icons.first"/></svg>
                    </button>

                    <button v-if="item === 'PrevPageLink' && showPrevNextIcon"
                            class="b-paginator__button" :disabled="isFirstPage" @click="changePage(page - 1)">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path :d="icons.prev"/></svg>
                    </button>

                    <div v-if="item === 'PageLinks'" class="b-paginator__pages">
                        <button v-for="p in pageLinks" :key="p"
                                class="b-paginator__button b-paginator__page"
                                :class="{ 'is-active': p === page }" @click="changePage(p)">
                            {{ p + 1 }}
                        </button>
                    </div>

                    <button v-if="item === 'NextPageLink' && showPrevNextIcon"
                            class="b-paginator__button" :disabled="isLastPage" @click="changePage(page + 1)">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path :d="icons.next"/></svg>
                    </button>

                    <button v-if="item === 'LastPageLink' && showFirstLastIcon"
                            class="b-paginator__button" :disabled="isLastPage" @click="changePage(pageCount - 1)">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path :d="icons.last"/></svg>
                    </button>

                    <select v-if="item === 'RowsPerPageDropdown' && rowsPerPageOptions?.length"
                            class="b-paginator__select" :value="rowsValue" @change="(e) => onRowsChange(parseInt((e.target as HTMLSelectElement).value))">
                        <option v-for="option in rowsPerPageOptions" :key="option" :value="option">{{ option }}</option>
                    </select>

                    <span v-if="item === 'CurrentPageReport'" class="b-paginator__report">
                        {{ reportText }}
                    </span>

                    <div v-if="item === 'JumpToPageInput'" class="b-paginator__jump">
                        <input type="number" class="b-paginator__input" :value="page + 1" @change="(e) => changePage(parseInt((e.target as HTMLInputElement).value) - 1)" />
                    </div>

                </template>
            </div>

            <slot name="end" />
        </template>
    </nav>
</template>