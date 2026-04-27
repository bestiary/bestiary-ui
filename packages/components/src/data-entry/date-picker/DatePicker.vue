<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref} from 'vue';
import type {DatePickerProps} from './date-picker.props';

defineOptions({ name: "BDatePicker" });

const props = withDefaults(defineProps<DatePickerProps>(), {
    selectionMode: "single",
    dateFormat: "mm/dd/yy",
    inline: false,
    disabled: false,
    showIcon: false,
    iconDisplay: "button",
    showOnFocus: true,
    fluid: false,
    manualInput: true,
});

const model = defineModel<Date | null>();
const emit = defineEmits(['show', 'hide', 'month-change', 'year-change']);

/* --- State --- */
const containerRef = ref<HTMLElement | null>(null);
const overlayVisible = ref(false);
const viewDate = ref(model.value instanceof Date ? new Date(model.value) : new Date());

/* --- Constants & Data --- */
const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

interface CalendarDay {
    day: number;
    month: number;
    year: number;
    otherMonth: boolean;
}

/* --- Computed --- */
const currentMonth = computed(() => viewDate.value.getMonth());
const currentYear = computed(() => viewDate.value.getFullYear());

const classes = computed(() => [
    "b-datepicker",
    {
        "b-datepicker--inline": props.inline,
        "b-datepicker--disabled": props.disabled,
        "b-datepicker--fluid": props.fluid,
        "b-datepicker--open": overlayVisible.value
    }
]);

const isDateDisabled = (meta: CalendarDay): boolean => {
    const checkTime = new Date(meta.year, meta.month, meta.day).getTime();

    if (props.minDate) {
        const minTime = new Date(props.minDate).setHours(0, 0, 0, 0);
        if (checkTime < minTime) return true;
    }

    if (props.maxDate) {
        const maxTime = new Date(props.maxDate).setHours(0, 0, 0, 0);
        if (checkTime > maxTime) return true;
    }

    return false;
};

/**
 * Generates a 6-week grid (42 days) to ensure consistent height.
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

/* --- Methods --- */

/**
 * Formats date based on custom dateFormat tokens.
 */
const formatValue = (date: Date | null | undefined, format: string): string => {
    if (!date || !(date instanceof Date)) return '';

    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    const startOfYear = new Date(y, 0, 0);
    const dayOfYear = Math.floor((date.getTime() - startOfYear.getTime()) / 86400000);

    const map: Record<string, string | number> = {
        'dd': d.toString().padStart(2, '0'),
        'd': d,
        'oo': dayOfYear.toString().padStart(3, '0'),
        'o': dayOfYear,
        'mm': (m + 1).toString().padStart(2, '0'),
        'm': m + 1,
        'MM': monthNames[m],
        'M': monthNames[m].substring(0, 3),
        'yy': y,
        'y': y.toString().slice(-2),
        '@': date.getTime(),
        '!': (date.getTime() * 10000) + 621355968000000000
    };

    return format.replace(/(?:'(.+?)')|(dd|oo|mm|MM|yy|d|o|m|M|y|@|!)/g, (match, literal, token) => {
        if (literal) return literal;
        return map[token] !== undefined ? map[token].toString() : match;
    });
};

const selectDate = (meta: CalendarDay) => {
    if (props.disabled || isDateDisabled(meta)) return;
    model.value = new Date(meta.year, meta.month, meta.day);
    if (!props.inline) overlayVisible.value = false;
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

const toggleOverlay = () => {
    if (props.disabled || props.inline) return;
    overlayVisible.value = !overlayVisible.value;
    emit(overlayVisible.value ? 'show' : 'hide');
};

const onOutsideClick = (event: MouseEvent) => {
    if (overlayVisible.value && containerRef.value && !containerRef.value.contains(event.target as Node)) {
        overlayVisible.value = false;
        emit('hide');
    }
};

onMounted(() => !props.inline && document.addEventListener('click', onOutsideClick));
onUnmounted(() => !props.inline && document.removeEventListener('click', onOutsideClick));

/**
 * Component slots documentation
 */
defineSlots<{
    header?: (props: { month: string, year: number }) => any;
    footer?: (props: {}) => any;
    date?: (props: { date: CalendarDay }) => any;
    /** Custom icon slot */
    inputicon?: (props: { clickCallback: (event: MouseEvent) => void }) => any;
}>();

const onInputClick = () => {
    if (props.showOnFocus && !props.inline) {
        toggleOverlay();
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
        <div v-if="!inline" :class="['b-datepicker__trigger', `is-display-${iconDisplay}`]">
            <input
                type="text"
                readonly
                class="b-datepicker__input"
                :placeholder="placeholder"
                :disabled="disabled"
                :value="formatValue(model, dateFormat)"
                @click="onInputClick"
            />

            <!-- ICON AS A BUTTON (APPENDED) -->
            <button
                v-if="showIcon && iconDisplay === 'button'"
                type="button"
                class="b-datepicker__icon-btn"
                :disabled="disabled"
                @click="onIconClick"
            >
                <slot name="inputicon" :clickCallback="onIconClick">
                    <component :is="icon" v-if="icon" />
                    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
                    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                    </svg>
                </slot>
            </div>
        </div>

        <!-- Calendar Panel -->
        <transition name="b-datepicker-fade">
            <div v-if="inline || overlayVisible" class="b-datepicker__panel">
                <div class="b-datepicker__header">
                    <button type="button" class="b-datepicker__nav-btn" @click.stop="nav(-1)" aria-label="Previous Month">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <div class="b-datepicker__title">
                        <slot name="header" :month="monthNames[currentMonth]" :year="currentYear">
                            <span>{{ monthNames[currentMonth] }}</span>
                            <span>{{ currentYear }}</span>
                        </slot>
                    </div>
                    <button type="button" class="b-datepicker__nav-btn" @click.stop="nav(1)" aria-label="Next Month">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                </div>

                <div class="b-datepicker__calendar">
                    <div class="b-datepicker__weekdays">
                        <div v-for="day in weekDays" :key="day" class="b-datepicker__weekday">{{ day }}</div>
                    </div>
                    <div class="b-datepicker__days">
                        <div
                            v-for="(date, idx) in daysInMonth"
                            :key="idx"
                            class="b-datepicker__day"
                            :class="{
                                'is-other-month': date.otherMonth,
                                'is-today': isToday(date),
                                'is-selected': isSelected(date),
                                'is-disabled': isDateDisabled(date)
                            }"
                            @click.stop="selectDate(date)"
                        >
                            <slot name="date" :date="date">{{ date.day }}</slot>
                        </div>
                    </div>
                </div>

                <div v-if="$slots.footer" class="b-datepicker__footer">
                    <slot name="footer" />
                </div>
            </div>
        </transition>
    </div>
</template>