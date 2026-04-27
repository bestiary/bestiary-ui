<script setup lang="ts">
import { ref } from "vue";
import ClockOutline from "@bestiary-ui/icons/src/ClockOutline.ts";

const date = ref();
const dateFormat = ref();

const buttondisplay = ref();
const icondisplay = ref();
const templatedisplay = ref();

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let prevMonth = (month === 0) ? 11 : month -1;
let prevYear = (prevMonth === 11) ? year - 1 : year;
let nextMonth = (month === 11) ? 0 : month + 1;
let nextYear = (nextMonth === 0) ? year + 1 : year;

const minmaxdate = ref();
const minDate = ref(new Date());
const maxDate = ref(new Date());

minDate.value.setMonth(prevMonth);
minDate.value.setFullYear(prevYear);
maxDate.value.setMonth(nextMonth);
maxDate.value.setFullYear(nextYear);
</script>

<template>
    <div class="content-view">
        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section">
                <BDatePicker v-model="date" />
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Format</h4>
            <div class="section">
                <BDatePicker v-model="dateFormat" dateFormat="y/m/dd" />
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Icon</h4>
            <div class="section flex justify-center gap-4">
                <div class="flex-auto">
                    <label for="buttondisplay" class="font-bold block mb-2"> Button </label>
                    <BDatePicker v-model="buttondisplay" showIcon fluid :showOnFocus="false" inputId="buttondisplay" />
                </div>
                <div class="flex-auto">
                    <label for="icondisplay" class="font-bold block mb-2"> Default Icon </label>
                    <BDatePicker v-model="icondisplay" showIcon fluid iconDisplay="input" inputId="icondisplay" />
                </div>
                <div class="flex-auto">
                    <label for="templatedisplay" class="font-bold block mb-2"> Custom Icon </label>
                    <BDatePicker v-model="templatedisplay" showIcon fluid iconDisplay="input" timeOnly inputId="templatedisplay">
                        <template #inputicon="slotProps">
                            <ClockOutline @click="slotProps.clickCallback" />
                        </template>
                    </BDatePicker>
                </div>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Min / Max</h4>
            <div class="section">
                <BDatePicker v-model="minmaxdate" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>