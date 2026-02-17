<template>
    <div class="b-flex b-flex-col b-gap-8">
        <section>
            <h2 class="b-text-h3 b-mb-4">Emerald Palette (Primitives)</h2>
            <div class="b-grid b-grid-cols-6 b-gap-2">
                <div v-for="s in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]" :key="s" class="b-p-4 b-rounded-md b-flex b-flex-col b-items-center" :style="{ background: `var(--b-ref-emerald-${s})` }">
                    <span class="b-text-xxs" :style="{ color: s > 500 ? 'white' : 'black' }">{{ s }}</span>
                </div>
            </div>
        </section>

        <section>
            <h2 class="b-text-h3 b-mb-4">Semantic Surfaces</h2>
            <div class="b-flex b-gap-4">
                <div class="b-size-24 b-bg-base b-border b-rounded-lg b-flex b-items-center b-justify-center">Base</div>
                <div class="b-size-24 b-bg-surface b-border b-rounded-lg b-flex b-items-center b-justify-center">Surface</div>
                <div class="b-size-24 b-bg-surface-variant b-border b-rounded-lg b-flex b-items-center b-justify-center">Variant</div>
            </div>
        </section>
    </div>
</template>