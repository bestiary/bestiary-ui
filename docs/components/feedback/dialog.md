<script setup>
import { ref } from 'vue';
const visibleBasic = ref(false);
const visiblePos = ref(false);
const position = ref('center');
const openPosition = (pos) => {
    position.value = pos;
    visiblePos.value = true;
};
const visibleMax = ref(false);
const visibleHeadless = ref(false);
</script>

# Dialog <VersionBadge module="components" />

The Dialog component provides a robust modal window for displaying content, requiring user interaction, or presenting critical information. The Vue implementation features automated scroll locking, a11y focus trapping, draggable headers, dynamic positioning, and responsive breakpoint sizing.

::: info Theming
This component is built on top of the Bestiary UI CSS framework. For CSS classes, anatomy, and CSS custom properties (tokens), refer to the [Dialog Style API](../../style/components/feedback/dialog).
:::

## Import

```vue
<script setup>
import { BDialog } from '@bestiary-ui/components';
</script>
```

## API Reference

### Props

| Name | Type | Default | Description |
|:---|:---|:---|:---|
| `visible` | `boolean` | `false` | Specifies the visibility of the dialog. **Supports `v-model:visible`.** |
| `header` | `string` | `undefined` | Title text of the dialog. Overridden by the `#header` slot. |
| `footer` | `string` | `undefined` | Text for the footer section. Overridden by the `#footer` slot. |
| `modal` | `boolean` | `true` | Defines if the background mask should visually block the application. |
| `position` | `DialogPosition` | `'center'` | Position of the dialog. Valid values: `'center'`, `'top'`, `'bottom'`, `'left'`, `'right'`, `'topleft'`, `'topright'`, `'bottomleft'`, `'bottomright'`. |
| `maximizable` | `boolean` | `false` | Enables a header button that expands the dialog to full screen. |
| `draggable` | `boolean` | `true` | Enables pointer dragging to reposition the dialog using the header. |
| `closable` | `boolean` | `true` | Adds a close icon to the header. |
| `dismissableMask` | `boolean` | `false` | Specifies if clicking the background mask should close the dialog. |
| `closeOnEscape` | `boolean` | `true` | Specifies if pressing the Escape key should close the dialog. |
| `blockScroll` | `boolean` | `true` | Locks document scrolling (`overflow: hidden`) when the dialog is visible. Safely handles multiple overlapping modals. |
| `showHeader` | `boolean` | `true` | Whether to render the header section. |
| `contentStyle` | `CSSProperties \| string` | `undefined` | Inline styles applied directly to the internal `.b-dialog__content` container. |
| `contentClass` | `any` | `undefined` | Custom classes applied to the internal `.b-dialog__content` container. |
| `style` | `CSSProperties \| string` | `undefined` | Inline style applied to the dialog window. Recommended for setting a static `width`. |
| `breakpoints` | `Record<string, string>` | `undefined` | Object mapping pixel breakpoints to widths (e.g., `{ '960px': '75vw', '641px': '100vw' }`). |
| `appendTo` | `string \| HTMLElement` | `'body'` | Valid query selector or HTMLElement to specify where the dialog is teleported. |
| `baseZIndex` | `number` | `0` | Base z-index value used in layering calculation. |
| `autoZIndex` | `boolean` | `true` | Automatically increments and manages the z-index globally to ensure the latest dialog is on top. |
| `closeButtonAriaLabel` | `string` | `'Close'` | Accessible label for the close button. |
| `maximizeButtonAriaLabel`| `string` | `'Maximize'` | Accessible label for the maximize button. |

### Events

| Name | Parameters | Description |
|:---|:---|:---|
| `show` | `-` | Emitted when the dialog opens. |
| `hide` | `-` | Emitted when the dialog closes. |
| `maximize` | `-` | Emitted when the dialog is expanded to full screen. |
| `unmaximize` | `-` | Emitted when the dialog is restored from full screen. |
| `dragend` | `event: PointerEvent` | Emitted when the user finishes dragging the dialog. |

### Slots

| Name | Description |
|:---|:---|
| `default` | Main content of the dialog. |
| `header` | Custom content for the dialog title area. Overrides the `header` prop. |
| `footer` | Custom content for the dialog footer. Overrides the `footer` prop. |
| `container` | Headless slot that completely replaces the `.b-dialog` window. Exposes a `closeCallback` function. |
| `closeicon` | Custom icon for the close button. |
| `maximizeicon` | Custom icon for the maximize button. Exposes a `{ maximized: boolean }` slot prop. |

## Examples

### Basic

Use `v-model:visible` to control the display state of the dialog. The `style` prop is used to set the base width of the window.

<div class="card flex justify-center">
    <BButton label="Show Dialog" icon="pi pi-external-link" @click="visibleBasic = true" />
    <BDialog v-model:visible="visibleBasic" header="Profile Update" :style="{ width: '400px' }">
        <p class="m-0">
            Ensure your account details are up to date before proceeding.
        </p>
        <template #footer>
            <BButton label="Cancel" variant="text" severity="secondary" @click="visibleBasic = false" />
            <BButton label="Save Changes" @click="visibleBasic = false" />
        </template>
    </BDialog>
</div>

```vue
<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
    <BButton label="Show Dialog" icon="pi pi-external-link" @click="visible = true" />

    <BDialog v-model:visible="visible" header="Profile Update" :style="{ width: '400px' }">
        <p class="m-0">
            Ensure your account details are up to date before proceeding.
        </p>
        <template #footer>
            <BButton label="Cancel" variant="text" severity="secondary" @click="visible = false" />
            <BButton label="Save Changes" @click="visible = false" />
        </template>
    </BDialog>
</template>
```

### Positioning

Use the `position` prop to anchor the dialog to different edges of the viewport.

<div class="card flex flex-wrap gap-2 justify-center">
    <BButton label="Top" variant="outline" @click="openPosition('top')" />
    <BButton label="Bottom" variant="outline" @click="openPosition('bottom')" />
    <BButton label="Left" variant="outline" @click="openPosition('left')" />
    <BButton label="Right" variant="outline" @click="openPosition('right')" />
    <BDialog v-model:visible="visiblePos" :position="position" header="Positioned Dialog" :style="{ width: '300px' }">
        <p>This dialog is anchored to the <strong>{{ position }}</strong>.</p>
    </BDialog>
</div>

```vue
<script setup>
import { ref } from 'vue';

const visible = ref(false);
const position = ref('center');

const openPosition = (pos) => {
    position.value = pos;
    visible.value = true;
};
</script>

<template>
    <div class="flex gap-2">
        <BButton label="Top" variant="outline" @click="openPosition('top')" />
        <BButton label="Bottom" variant="outline" @click="openPosition('bottom')" />
        <BButton label="Left" variant="outline" @click="openPosition('left')" />
        <BButton label="Right" variant="outline" @click="openPosition('right')" />
    </div>

    <BDialog v-model:visible="visible" :position="position" header="Positioned Dialog" :style="{ width: '300px' }">
        <p>This dialog is anchored to the <strong>{{ position }}</strong>.</p>
    </BDialog>
</template>
```

### Maximizable & Responsive Breakpoints

Enable the `maximizable` prop to allow the user to expand the dialog. Use `breakpoints` to ensure the dialog automatically scales on smaller screens before falling back to full width.

<div class="card flex justify-center">
    <BButton label="Open Document" @click="visibleMax = true" />
    <BDialog 
        v-model:visible="visibleMax" 
        header="Architecture Rules" 
        maximizable 
        :style="{ width: '50vw' }" 
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    >
        <p>The dialog will consume 50vw on desktop, 75vw on tablets, and 100vw on mobile devices.</p>
        <p>Click the maximize icon in the header to override dimensions manually.</p>
    </BDialog>
</div>

```vue
<template>
    <BButton label="Open Document" @click="visible = true" />

    <BDialog 
        v-model:visible="visible" 
        header="Architecture Rules" 
        maximizable 
        :style="{ width: '50vw' }" 
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    >
        <p>The dialog will consume 50vw on desktop, 75vw on tablets, and 100vw on mobile devices.</p>
        <p>Click the maximize icon in the header to override dimensions manually.</p>
    </BDialog>
</template>
```

### Headless Container

For total control over the dialog window (e.g., removing borders, paddings, or building a custom transparent overlay), use the `#container` slot. This replaces the internal `.b-dialog` structure but maintains the backdrop mask, transitions, scroll locking, and focus trapping.

<div class="card flex justify-center">
    <BButton label="Show Custom Modal" @click="visibleHeadless = true" />
    <BDialog v-model:visible="visibleHeadless">
        <template #container="{ closeCallback }">
            <div class="flex flex-col bg-surface-base rounded-2xl p-8 shadow-2xl items-center text-center max-w-sm pointer-events-auto border border-border-subtle">
                <div class="text-4xl mb-4">🎉</div>
                <h2 class="text-xl font-bold mb-2">Success!</h2>
                <p class="text-text-muted mb-6">Your operation was completed successfully.</p>
                <BButton label="Awesome" style="width: 100%;" @click="closeCallback" />
            </div>
        </template>
    </BDialog>
</div>

```vue
<template>
    <BButton label="Show Custom Modal" @click="visible = true" />

    <BDialog v-model:visible="visible">
        <template #container="{ closeCallback }">
            <div class="flex flex-col bg-surface-base rounded-2xl p-8 shadow-2xl items-center text-center max-w-sm pointer-events-auto border border-border-subtle">
                <div class="text-4xl mb-4">🎉</div>
                <h2 class="text-xl font-bold mb-2">Success!</h2>
                <p class="text-text-muted mb-6">Your operation was completed successfully.</p>
                <BButton label="Awesome" class="w-full" @click="closeCallback" />
            </div>
        </template>
    </BDialog>
</template>
```