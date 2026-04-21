<script setup lang="ts">
import { ref } from 'vue';
import {
    Bars3BottomLeftOutline,
    Bars3BottomRightOutline,
    Bars3CenterLeftOutline,
    Bars3Outline
} from "@bestiary-ui/icons";

const value = ref('One-Way');
const options = ref(['One-Way', 'Return']);

const value1 = ref(null);
const options1 = ref([
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 }
]);

const value2 = ref(null);
const options2 = ref([
    { icon: Bars3BottomLeftOutline, value: 'Left' },
    { icon: Bars3BottomRightOutline, value: 'Right' },
    { icon: Bars3CenterLeftOutline, value: 'Center' },
    { icon: Bars3Outline, value: 'Justify' }
]);

const value3 = ref(null);
const value4 = ref('Beginner');
const value5 = ref('Expert');
const options3 = ref(['Beginner', 'Expert']);

const value6 = ref('One-Way');
const options6 = ref(['One-Way', 'Return']);

const value7 = ref('Off');
const value8 = ref();
const options7 = ref(['Off', 'On']);
const options8 = ref([
    { name: 'Option 1', value: 1, constant: false },
    { name: 'Option 2', value: 2, constant: true }
]);

const value9 = ref(null);
const options9 = ref(['One-Way', 'Return']);
</script>

<template>
<div class="view-content">
    <section>
        <h4 class="mb-3">Basic</h4>
        <div class="section flex justify-center">
            <BSelectButton v-model="value" :options="options" />
        </div>
    </section>

    <section class="mt-8">
        <h4 class="mb-3">Multiple</h4>
        <div class="section flex justify-center">
            <BSelectButton v-model="value1" :options="options1" optionLabel="name" multiple aria-labelledby="multiple" />
        </div>
    </section>

    <section class="mt-8">
        <h4 class="mb-3">Template</h4>
        <div class="section flex justify-center">
            <BSelectButton v-model="value2" :options="options2" optionLabel="value" dataKey="value" aria-labelledby="custom">
                <template #option="slotProps">
                    <component :is="slotProps.option.icon" />
                </template>
            </BSelectButton>
        </div>
    </section>

    <section class="mt-8">
        <h4 class="mb-3">Template</h4>
        <div class="section flex flex-col items-center gap-4">
            <BSelectButton v-model="value3" :options="options3" size="small" />
            <BSelectButton v-model="value4" :options="options3" />
            <BSelectButton v-model="value5" :options="options3" size="large" />
        </div>
    </section>

    <section class="mt-8">
        <h4 class="mb-3">Fluid</h4>
        <div class="section flex justify-center">
            <BSelectButton v-model="value6" :options="options6" fluid />
        </div>
    </section>

    <section class="mt-8">
        <h4 class="mb-3">Disabled</h4>
        <div class="section flex justify-center gap-8">
            <BSelectButton v-model="value7" :options="options7" disabled />
            <BSelectButton v-model="value8" :options="options8" optionDisabled="constant" optionLabel="name" />
        </div>
    </section>

    <section class="mt-8">
        <h4 class="mb-3">Invalid</h4>
        <div class="section flex justify-center">
            <BSelectButton v-model="value9" :options="options9" aria-labelledby="basic" allowEmpty :invalid="value9 === null"  />
        </div>
    </section>
</div>
</template>