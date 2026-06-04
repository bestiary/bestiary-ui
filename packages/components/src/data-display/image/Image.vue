<script setup lang="ts">
import { ref, computed, watch, onUnmounted, StyleValue } from 'vue';
import type { ImageProps } from './image.props';

defineOptions({ name: 'BImage' });

const props = withDefaults(defineProps<ImageProps>(), {
    preview: false
});

const emit = defineEmits(['show', 'hide', 'error']);

defineSlots<{
    /** Slot to override the main image. Receives binding props. */
    image?: (props: { class: any; style: StyleValue; onClick: (e: MouseEvent) => void }) => any;
    /** Slot for the hover indicator icon */
    previewicon?: (props: Record<string, never>) => any;
    /** Slot to override the large image in the preview overlay */
    preview?: (props: { class: string; style: StyleValue; onClick: (e: MouseEvent) => void }) => any;
    /** Legacy slot for the indicator */
    indicator?: (props: Record<string, never>) => any;
}>();

const previewVisible = ref(false);
const rotate = ref(0);
const scale = ref(1);

const imageProps = computed(() => ({
    src: props.src,
    alt: props.alt,
    srcset: props.srcset,
    class: ['b-image__el', props.imageClass, { 'b-image__el--previewable': props.preview }],
    style: props.imageStyle,
    ...props.imageAttributes
}));

const formatUnit = (value: string | number | undefined) => {
    if (!value) return undefined;
    return isNaN(Number(value)) ? value : `${value}px`;
};

const containerStyle = computed(() => ({
    width: formatUnit(props.width),
    height: formatUnit(props.height)
}));

const previewImageStyle = computed(() => ({
    transform: `rotate(${rotate.value}deg) scale(${scale.value})`,
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'auto'
}));

const onImageClick = (event: MouseEvent) => {
    if (props.preview) {
        previewVisible.value = true;
        emit('show', event);
    }
};

const hidePreview = (event?: MouseEvent) => {
    previewVisible.value = false;
    rotate.value = 0;
    scale.value = 1;
    emit('hide', event);
};

// Controls
const rotateRight = () => { rotate.value += 90; };
const rotateLeft = () => { rotate.value -= 90; };
const zoomIn = () => { scale.value += 0.1; };
const zoomOut = () => { if (scale.value > 0.2) scale.value -= 0.1; };

// Safe body lock and keyboard support
const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') hidePreview();
};

watch(previewVisible, (isVisible) => {
    if (isVisible) {
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKeyDown);
    } else {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKeyDown);
    }
});

onUnmounted(() => {
    if (previewVisible.value) {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKeyDown);
    }
});
</script>

<template>
    <div class="b-image" :style="containerStyle">
        <!-- Main Image Section -->
        <slot
            v-if="$slots.image"
            name="image"
            :class="imageProps.class"
            :style="imageProps.style"
            :onClick="onImageClick"
        />
        <img
            v-else
            v-bind="imageProps"
            @click="onImageClick"
            @error="emit('error', $event)"
        />

        <!-- Hover Indicator -->
        <div v-if="preview" class="b-image__preview-indicator" aria-hidden="true" @click="onImageClick">
            <div class="b-image__preview-icon">
                <slot name="previewicon">
                    <slot name="indicator">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </slot>
                </slot>
            </div>
        </div>

        <!-- Fullscreen Portal -->
        <Teleport to="body">
            <transition name="b-image-fade">
                <div
                    v-if="previewVisible"
                    class="b-image__preview-mask"
                    role="dialog"
                    aria-modal="true"
                    @click="hidePreview"
                >
                    <!-- Toolbar -->
                    <div class="b-image__preview-toolbar" @click.stop>
                        <button class="b-image__preview-btn" @click="rotateLeft" aria-label="Rotate Left">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                        </button>
                        <button class="b-image__preview-btn" @click="rotateRight" aria-label="Rotate Right">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                        </button>
                        <button class="b-image__preview-btn" @click="zoomOut" aria-label="Zoom Out">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M8 11h6"/></svg>
                        </button>
                        <button class="b-image__preview-btn" @click="zoomIn" aria-label="Zoom In">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>
                        </button>
                        <button class="b-image__preview-btn b-image__preview-btn--close" @click="hidePreview" aria-label="Close">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                        </button>
                    </div>

                    <!-- Large Image Content -->
                    <div class="b-image__preview-container" @click.stop>
                        <slot
                            v-if="$slots.preview"
                            name="preview"
                            class="b-image__preview-img"
                            :style="previewImageStyle"
                            :onClick="hidePreview"
                        />
                        <img
                            v-else
                            :src="src"
                            class="b-image__preview-img"
                            :style="previewImageStyle"
                            :alt="alt"
                        />
                    </div>
                </div>
            </transition>
        </Teleport>
    </div>
</template>