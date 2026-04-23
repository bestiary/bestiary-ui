<script setup>
import { ref } from "vue";

const checked = ref(false);
const pizza = ref();
const size = ref();
const checked1 = ref(false);
const checked2 = ref(true);

const categories = ref([
    {name: "Accounting", key: "A"},
    {name: "Marketing", key: "M"},
    {name: "Production", key: "P"},
    {name: "Research", key: "R"}
]);
const selectedCategories = ref(['Marketing']);
</script>

<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section flex justify-center">
                <BCheckbox v-model="checked" binary />
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Group</h4>
            <div class="section flex justify-center gap-4">
                <div class="flex items-center gap-2">
                    <BCheckbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
                    <label for="ingredient1"> Cheese </label>
                </div>
                <div class="flex items-center gap-2">
                    <BCheckbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
                    <label for="ingredient2"> Mushroom </label>
                </div>
                <div class="flex items-center gap-2">
                    <BCheckbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
                    <label for="ingredient3"> Pepper </label>
                </div>
                <div class="flex items-center gap-2">
                    <BCheckbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
                    <label for="ingredient4"> Onion </label>
                </div>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Dynamic</h4>
            <div class="section flex justify-center gap-4">
                <div class="flex flex-col gap-4">
                    <div v-for="category of categories" :key="category.key" class="flex items-center gap-2">
                        <BCheckbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
                        <label :for="category.key">{{ category.name }}</label>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Indeterminate</h4>
            <div class="section flex justify-center gap-4">
                <BCheckbox v-model="checked" indeterminate binary />
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Filled</h4>
            <div class="section flex justify-center gap-4">
                <BCheckbox v-model="checked" binary variant="filled" />
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Sizes</h4>
            <div class="section flex justify-center gap-4">
                <div class="flex items-center gap-2">
                    <BCheckbox v-model="size" inputId="size_small" name="size" value="Small" size="small" />
                    <label for="size_small" class="text-sm">Small</label>
                </div>
                <div class="flex items-center gap-2">
                    <BCheckbox v-model="size" inputId="size_normal" name="size" value="Normal" />
                    <label for="size_normal">Normal</label>
                </div>
                <div class="flex items-center gap-2">
                    <BCheckbox v-model="size" inputId="size_large" name="size" value="Large" size="large" />
                    <label for="size_large" class="text-lg">Large</label>
                </div>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Invalid</h4>
            <div class="section flex justify-center gap-4">
                <BCheckbox v-model="checked" :invalid="!checked"  binary />
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Disabled</h4>
            <div class="section flex justify-center gap-4">
                <BCheckbox v-model="checked1" binary disabled />
                <BCheckbox v-model="checked2" binary disabled />
            </div>
        </section>
    </div>
</template>