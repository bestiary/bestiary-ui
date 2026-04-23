<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";

const value = ref(40);

onMounted(() => {
    startProgress();
});

onBeforeUnmount(() => {
    endProgress();
});

const value1 = ref(0);
const interval = ref();
const startProgress = () => {
    interval.value = setInterval(() => {
        let newValue = value1.value + Math.floor(Math.random() * 10) + 1;
        if (newValue >= 100) {
            newValue = 100;
        }
        value1.value = newValue;
    }, 2000);
};
const endProgress = () => {
    clearInterval(interval.value);
    interval.value = null;
};
</script>

<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section flex items-center gap-4">
                <BProgress :value="50"/>
                <BProgress type="circular" :value="50"/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Dynamic</h4>
            <div class="section flex items-center gap-4">
                <BProgress :value="value1"/>
                <BProgress type="circular" :value="value1"/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Template</h4>
            <div class="section flex items-center gap-4">
                <BProgress :value="40"> {{ value }}/100</BProgress>
                <BProgress type="circular" :value="40"> {{ value }}/100</BProgress>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Indeterminate</h4>
            <div class="section flex items-center gap-4">
                <BProgress mode="indeterminate" style="height: 6px"></BProgress>
                <BProgress mode="indeterminate" type="circular"></BProgress>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Severity</h4>
            <div class="section flex flex-col items-center gap-4">
                <div class="flex gap-4 inline-full">
                    <div class="flex flex-col gap-2 inline-1-2">
                        <BProgress :value="50" severity="primary"/>
                        <BProgress :value="50" severity="secondary"/>
                        <BProgress :value="50" severity="success"/>
                        <BProgress :value="50" severity="info"/>
                        <BProgress :value="50" severity="warn"/>
                        <BProgress :value="50" severity="danger"/>
                        <BProgress :value="50" severity="contrast"/>
                    </div>

                    <div class="flex flex-col gap-2 inline-1-2">
                        <BProgress mode="indeterminate" severity="primary"/>
                        <BProgress mode="indeterminate" severity="secondary"/>
                        <BProgress mode="indeterminate" severity="success"/>
                        <BProgress mode="indeterminate" severity="info"/>
                        <BProgress mode="indeterminate" severity="warn"/>
                        <BProgress mode="indeterminate" severity="danger"/>
                        <BProgress mode="indeterminate" severity="contrast"/>
                    </div>
                </div>

                <div class="flex gap-2">
                    <BProgress mode="indeterminate" type="circular" severity="primary"/>
                    <BProgress mode="indeterminate" type="circular" severity="secondary"/>
                    <BProgress mode="indeterminate" type="circular" severity="success"/>
                    <BProgress mode="indeterminate" type="circular" severity="info"/>
                    <BProgress mode="indeterminate" type="circular" severity="warn"/>
                    <BProgress mode="indeterminate" type="circular" severity="danger"/>
                    <BProgress mode="indeterminate" type="circular" severity="contrast"/>
                </div>
            </div>
        </section>
    </div>
</template>