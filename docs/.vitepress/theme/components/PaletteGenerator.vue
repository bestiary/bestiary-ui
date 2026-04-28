<script setup>
import { ref } from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: true
    }
})

const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
const copiedText = ref('')

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    copiedText.value = text
    setTimeout(() => {
        copiedText.value = ''
    }, 2000)
}

const getTextColor = (step) => (step >= 500 ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.7)')
</script>

<template>
    <div class="palette-container">
        <div class="palette-info">
            <span class="palette-name">{{ name }}</span>
        </div>

        <div class="palette-swatches">
            <div
                v-for="step in steps"
                :key="step"
                class="swatch"
                :style="{
          backgroundColor: `var(--b-${name}-${step})`,
          color: getTextColor(step)
        }"
            >
                <span class="step-number">{{ step }}</span>

                <button
                    class="copy-zone left"
                    @click="copyToClipboard(`--b-${props.name}-${step}`)"
                    title="Copy Variable"
                >
                    <span>VAR</span>
                </button>
                <button
                    class="copy-zone right"
                    @click="copyToClipboard(`oklch(var(--b-${props.name}-${step}-channels))`)"
                    title="Copy LCH Channels"
                >
                    <span>LCH</span>
                </button>
            </div>
        </div>

        <Transition name="slide-up">
            <div v-if="copiedText" class="toast">
                Copied: {{ copiedText }}
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.palette-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin: 12px 0;
    width: 100%;
}

.palette-info {
    width: 80px;
    flex-shrink: 0;
}

.palette-name {
    font-size: 14px;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--vp-c-text-1);
}

.palette-swatches {
    display: flex;
    flex: 1;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--vp-c-divider);
}

.swatch {
    position: relative;
    flex: 1;
    aspect-ratio: 1 / 1; /* Квадратні блоки */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s ease;
}

.step-number {
    font-size: 10px;
    font-weight: 700;
    pointer-events: none; /* Щоб не заважало клікам */
    z-index: 1;
}

/* Зони копіювання */
.copy-zone {
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.2s ease;
    padding: 0;
    overflow: hidden;
}

.copy-zone span {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9px;
    font-weight: 800;
    background: rgba(0, 0, 0, 0.1);
    padding: 2px 4px;
}

.copy-zone.left {
    left: 0;
}

.copy-zone.right {
    right: 0;
}

.swatch:hover .copy-zone {
    opacity: 1;
}

.copy-zone:hover {
    background: rgba(255, 255, 255, 0.15) !important;
}

.swatch:hover .step-number {
    opacity: 0.2; /* Приховуємо номер при наведенні */
}

/* Toast */
.toast {
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: var(--brand-color, #7dae78);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    z-index: 1000;
    font-size: 13px;
    font-weight: 500;
}

.slide-up-enter-active, .slide-up-leave-active {
    transition: all 0.3s ease;
}
.slide-up-enter-from { transform: translateY(20px); opacity: 0; }
.slide-up-leave-to { transform: translateY(-20px); opacity: 0; }

@media (max-width: 768px) {
    .palette-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
    .palette-swatches {
        width: 100%;
    }
}
</style>