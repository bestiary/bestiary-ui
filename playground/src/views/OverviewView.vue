<!-- playground/src/views/OverviewView.vue -->
<template>
    <div class="overview b-flex b-flex-col b-gap-12">

        <!-- 1. Header Section -->
        <header>
            <h1 class="b-text-6xl b-font-black b-mb-2">Bestiary UI</h1>
            <p class="b-text-xl b-text-muted">
                Current Habitat: <span class="b-text-primary b-font-bold">{{ habitatName }}</span> |
                Essence: <span class="b-text-primary b-font-bold">{{ essenceName }}</span>
            </p>
        </header>

        <!-- 2. Typography Section -->
        <section class="b-p-8 b-border b-rounded-container b-bg-surface">
            <h2 class="b-text-h2 b-mb-6">Typography</h2>
            <div class="b-flex b-flex-col b-gap-4">
                <h1 class="b-m-0">Heading 1 (48px)</h1>
                <h2 class="b-m-0">Heading 2 (30px)</h2>
                <h3 class="b-m-0">Heading 3 (24px)</h3>
                <p class="b-text-main">
                    Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span class="b-text-primary b-font-bold">Highlighted text</span> and
                    <span class="b-text-muted">muted secondary text.</span>
                </p>
            </div>
        </section>

        <!-- 3. Brand & Status Matrix (Наші нові токени Solid/Subtle) -->
        <section>
            <h2 class="b-text-h2 b-mb-6">Color System (Solid vs Subtle)</h2>
            <div class="b-grid b-grid-cols-4 b-gap-4">
                <!-- Квадрати для демонстрації кожної групи -->
                <div v-for="group in ['primary', 'success', 'error', 'info', 'warning', 'contrast']" :key="group" class="b-flex b-flex-col b-gap-2">
                    <h4 class="b-uppercase b-text-xxs b-font-bold b-text-muted">{{ group }}</h4>
                    <!-- Solid -->
                    <div :style="{ background: `var(--b-${group}-solid-background)`, color: `var(--b-${group}-solid-text)` }"
                         class="b-p-4 b-rounded-md b-text-sm b-font-bold b-shadow-sm">
                        Solid
                    </div>
                    <!-- Subtle -->
                    <div :style="{ background: `var(--b-${group}-subtle-background)`, color: `var(--b-${group}-subtle-text)`, border: `1px solid var(--b-${group}-subtle-border)` }"
                         class="b-p-4 b-rounded-md b-text-sm b-font-bold">
                        Subtle
                    </div>
                </div>
            </div>
        </section>

        <!-- 4. Interactive Components -->
        <section class="b-grid b-grid-cols-2 b-gap-8">
            <!-- Buttons -->
            <BCard title="Buttons & Actions" subtitle="Testing Severities & States">
                <div class="b-flex b-flex-wrap b-gap-3">
                    <BButton severity="primary">Primary</BButton>
                    <BButton severity="secondary">Secondary</BButton>
                    <BButton severity="success" rounded>Success</BButton>
                    <BButton severity="danger" loading></BButton>
                    <BButton severity="info" :icon="Icons.InformationCircleSolid" />
                </div>
            </BCard>

            <!-- Data Entry -->
            <BCard title="Forms" subtitle="Testing Inputs & Interaction">
                <div class="b-flex b-flex-col b-gap-4">
                    <BInputText label="Username" placeholder="Enter username..." />
                    <BPassword label="Password" feedback toggleMask />
                </div>
            </BCard>
        </section>

        <!-- 5. Surfaces & Status Messages -->
        <section class="b-flex b-flex-col b-gap-4">
            <BMessage severity="info">
                Welcome to the new Design System architecture!
            </BMessage>
            <BMessage severity="success" closable>
                Data synchronized successfully with Essence: Emerald.
            </BMessage>
        </section>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as Icons from '@bestiary-ui/icons'
import { BCard } from "@bestiary-ui/components";
import { BButton } from "@bestiary-ui/components";
import { BInputText } from "@bestiary-ui/components";
import { BPassword } from "@bestiary-ui/components";
import { BMessage } from "@bestiary-ui/components";

const habitatName = ref('')
const essenceName = ref('')

onMounted(() => {
    // Читаємо назви безпосередньо з CSS змінних
    const style = getComputedStyle(document.documentElement)
    habitatName.value = style.getPropertyValue('--b-habitat-name').trim().replace(/"/g, '')
    essenceName.value = style.getPropertyValue('--b-essence-name').trim().replace(/"/g, '')
})
</script>