<script setup lang="ts">
import { computed, onUnmounted, ref, watch, nextTick } from 'vue';
import type { DatePickerProps, CalendarDay } from './date-picker.props';

defineOptions({ name: 'BDatePicker' });

const props = withDefaults(defineProps<DatePickerProps>(), {
    selectionMode: 'single',
    dateFormat: 'mm/dd/yy',
    inline: false,
    disabled: false,
    showIcon: false,
    iconDisplay: 'button',
    showOnFocus: true,
    fluid: false,
    manualInput: true,
    size: 'medium',
    variant: 'outline',
    invalid: false,
    appendTo: 'body'
});

const model = defineModel<Date | null>();
const emit = defineEmits(['show', 'hide', 'month-change', 'year-change']);

defineSlots<{
    header?: (props: { month: string, year: number }) => any;
    footer?: (props: Record<string, never>) => any;
    date?: (props: { date: CalendarDay }) => any;
    inputicon?: (props: { clickCallback: (event: MouseEvent) => void }) => any;
}>();

/* --- State --- */
const containerRef = ref<HTMLElement | null>(null);
const panelRef = ref<HTMLElement | null>(null);

const overlayVisible = ref(false);
const viewDate = ref(model.value instanceof Date ? new Date(model.value) : new Date());

/* --- Constants --- */
const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

/* --- Computed --- */
const currentMonth = computed(() => viewDate.value.getMonth());
const currentYear = computed(() => viewDate.value.getFullYear());

const classes = computed(() => [
    'b-datepicker',
    `b-datepicker--size-${props.size}`,
    `b-datepicker--variant-${props.variant}`,
    {
        'b-datepicker--inline': props.inline,
        'b-datepicker--disabled': props.disabled,
        'b-datepicker--fluid': props.fluid,
        'b-datepicker--invalid': props.invalid,
        'b-datepicker--open': overlayVisible.value
    }
]);

/* --- Calendar Logic --- */
const isDateDisabled = (meta: CalendarDay): boolean => {
    const checkTime = new Date(meta.year, meta.month, meta.day).getTime();

    if (props.minDate && checkTime < new Date(props.minDate).setHours(0, 0, 0, 0)) return true;
    if (props.maxDate && checkTime > new Date(props.maxDate).setHours(0, 0, 0, 0)) return true;

    return false;
};

/**
 * Generates a 6-week grid (42 days) to ensure consistent height across all months.
 */
const daysInMonth = computed((): CalendarDay[] => {
    const year = currentYear.value;
    const month = currentMonth.value;
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    const days: CalendarDay[] = [];

    // Previous month padding
    for (let i = firstDay; i > 0; i--) {
        days.push({ day: prevMonthLastDay - i + 1, month: month - 1, year, otherMonth: true });
    }
    // Current month
    for (let i = 1; i <= totalDays; i++) {
        days.push({ day: i, month, year, otherMonth: false });
    }
    // Next month padding
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
        days.push({ day: i, month: month + 1, year, otherMonth: true });
    }
    return days;
});

/* --- Formatters --- */
const formatValue = (date: Date | null | undefined, format: string): string => {
    if (!date || !(date instanceof Date)) return '';

    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    const map: Record<string, string | number> = {
        'dd': d.toString().padStart(2, '0'),
        'd': d,
        'mm': (m + 1).toString().padStart(2, '0'),
        'm': m + 1,
        'MM': monthNames[m],
        'M': monthNames[m].substring(0, 3),
        'yy': y,
        'y': y.toString().slice(-2)
    };

    return format.replace(/(?:'(.+?)')|(dd|mm|MM|yy|d|m|M|y)/g, (match, literal, token) => {
        if (literal) return literal;
        return map[token] !== undefined ? map[token].toString() : match;
    });
};

/* --- Actions --- */
const selectDate = (meta: CalendarDay) => {
    if (props.disabled || isDateDisabled(meta)) return;

    // Adjust year and month properly if clicked on padding days
    const selectedDate = new Date(meta.year, meta.month, meta.day);
    model.value = selectedDate;

    if (!props.inline) {
        hideOverlay();
    } else if (meta.otherMonth) {
        viewDate.value = selectedDate; // Switch view if inline
    }
};

const isSelected = (meta: CalendarDay) => {
    return model.value instanceof Date &&
        model.value.getDate() === meta.day &&
        model.value.getMonth() === meta.month &&
        model.value.getFullYear() === meta.year;
};

const isToday = (meta: CalendarDay) => {
    const today = new Date();
    return today.getDate() === meta.day &&
        today.getMonth() === meta.month &&
        today.getFullYear() === meta.year;
};

const nav = (delta: number) => {
    viewDate.value = new Date(currentYear.value, currentMonth.value + delta, 1);
    emit('month-change', { month: currentMonth.value, year: currentYear.value });
};

/* --- Floating Overlay Logic --- */
const calculatePosition = () => {
    if (props.inline || !containerRef.value || !panelRef.value) return;

    const containerRect = containerRef.value.getBoundingClientRect();
    const panelHeight = panelRef.value.offsetHeight;
    const viewportHeight = window.innerHeight;

    let top = containerRect.bottom + window.scrollY;
    const left = containerRect.left + window.scrollX;

    // Open upwards if not enough space below
    if (containerRect.bottom + panelHeight > viewportHeight && containerRect.top > panelHeight) {
        top = containerRect.top + window.scrollY - panelHeight;
        panelRef.value.style.transformOrigin = 'bottom left';
    } else {
        panelRef.value.style.transformOrigin = 'top left';
    }

    panelRef.value.style.top = `${top}px`;
    panelRef.value.style.left = `${left}px`;
    panelRef.value.style.minWidth = `${containerRect.width}px`;
};

const onOutsideClick = (event: MouseEvent) => {
    if (!overlayVisible.value || !panelRef.value || !containerRef.value) return;
    const target = event.target as Node;
    if (!containerRef.value.contains(target) && !panelRef.value.contains(target)) {
        hideOverlay();
    }
};

const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && overlayVisible.value) {
        hideOverlay();
    }
};

const showOverlay = async () => {
    if (props.disabled || props.inline) return;
    overlayVisible.value = true;
    emit('show');

    await nextTick();
    calculatePosition();
};

const hideOverlay = () => {
    overlayVisible.value = false;
    emit('hide');
};

const toggleOverlay = () => {
    overlayVisible.value ? hideOverlay() : showOverlay();
};

// Memory Management for Listeners
watch(overlayVisible, (isVisible) => {
    if (isVisible && !props.inline) {
        document.addEventListener('click', onOutsideClick, { passive: true });
        document.addEventListener('keydown', onKeydown, { passive: true });
        window.addEventListener('resize', calculatePosition, { passive: true });
        window.addEventListener('scroll', calculatePosition, { capture: true, passive: true });
    } else {
        document.removeEventListener('click', onOutsideClick);
        document.removeEventListener('keydown', onKeydown);
        window.removeEventListener('resize', calculatePosition);
        window.removeEventListener('scroll', calculatePosition, { capture: true });
    }
});

onUnmounted(() => {
    document.removeEventListener('click', onOutsideClick);
    document.removeEventListener('keydown', onKeydown);
    window.removeEventListener('resize', calculatePosition);
    window.removeEventListener('scroll', calculatePosition, { capture: true });
});

/* --- Template Handlers --- */
const onInputClick = () => {
    if (props.showOnFocus && !props.inline) {
        showOverlay();
    }
};

const onIconClick = (event: MouseEvent) => {
    event.stopPropagation();
    toggleOverlay();
};
</script>

<template>
    <div ref="containerRef" :class="classes">
        <!-- TRIGGER SECTION -->
        <div v-if="!inline" :class="['b-datepicker__trigger', `b-datepicker__trigger--icon-${iconDisplay}`]">
            <input
                type="text"
                class="b-datepicker__input"
                role="combobox"
                aria-haspopup="dialog"
                :aria-expanded="overlayVisible"
                :aria-invalid="invalid ? 'true' : undefined"
                :readonly="!manualInput"
                :placeholder="placeholder"
                :disabled="disabled"
                :value="formatValue(model, dateFormat)"
                @click="onInputClick"
                @keydown.enter.prevent="showOverlay"
            />

            <!-- ICON BUTTON (APPENDED) -->
            <button
                v-if="showIcon && iconDisplay === 'button'"
                type="button"
                class="b-datepicker__icon-btn"
                :disabled="disabled"
                tabindex="-1"
                aria-label="Open Calendar"
                @click="onIconClick"
            >
                <slot name="inputicon" :clickCallback="onIconClick">
                    <component :is="icon" v-if="icon" />
                    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                    </svg>
                </slot>
            </button>

            <!-- ICON INSIDE INPUT -->
            <div
                v-if="showIcon && iconDisplay === 'input'"
                class="b-datepicker__input-icon"
                @click="onIconClick"
            >
                <slot name="inputicon" :clickCallback="onIconClick">
                    <component :is="icon" v-if="icon" />
                    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                    </svg>
                </slot>
            </div>
        </div>

        <!-- CALENDAR PANEL (Teleported if not inline) -->
        <Teleport :to="appendTo" :disabled="inline">
            <transition name="b-datepicker-fade">
                <div
                    v-if="inline || overlayVisible"
                    ref="panelRef"
                    class="b-datepicker__panel"
                    :class="{ 'b-datepicker__panel--inline': inline }"
                    role="dialog"
                    aria-modal="true"
                    @mousedown.prevent
                >
                    <!-- Header: Nav & Title -->
                    <div class="b-datepicker__header">
                        <button type="button" class="b-datepicker__nav-btn" @click.stop="nav(-1)" aria-label="Previous Month">
                            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
                        </button>

                        <div class="b-datepicker__title" aria-live="polite">
                            <slot name="header" :month="monthNames[currentMonth]" :year="currentYear">
                                <span class="b-datepicker__title-month">{{ monthNames[currentMonth] }}</span>
                                <span class="b-datepicker__title-year">{{ currentYear }}</span>
                            </slot>
                        </div>

                        <button type="button" class="b-datepicker__nav-btn" @click.stop="nav(1)" aria-label="Next Month">
                            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                        </button>
                    </div>

                    <!-- Grid -->
                    <div class="b-datepicker__calendar">
                        <div class="b-datepicker__weekdays" role="row">
                            <div v-for="day in weekDays" :key="day" class="b-datepicker__weekday" role="columnheader">{{ day }}</div>
                        </div>
                        <div class="b-datepicker__days" role="grid">
                            <button
                                v-for="(date, idx) in daysInMonth"
                                :key="idx"
                                type="button"
                                class="b-datepicker__day"
                                :class="{
                                    'b-datepicker__day--other-month': date.otherMonth,
                                    'b-datepicker__day--today': isToday(date),
                                    'b-datepicker__day--selected': isSelected(date),
                                    'b-datepicker__day--disabled': isDateDisabled(date)
                                }"
                                :disabled="isDateDisabled(date)"
                                :aria-label="`${date.day} ${monthNames[date.month]} ${date.year}`"
                                :aria-selected="isSelected(date) ? 'true' : undefined"
                                tabindex="-1"
                                @click.stop="selectDate(date)"
                            >
                                <slot name="date" :date="date">{{ date.day }}</slot>
                            </button>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div v-if="$slots.footer" class="b-datepicker__footer">
                        <slot name="footer" />
                    </div>
                </div>
            </transition>
        </Teleport>
    </div>
</template>