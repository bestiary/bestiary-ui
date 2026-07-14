# InputText <VersionBadge module="components" />
InputText is a versatile text input component providing robust styling, automatic accessibility attributes, and seamless two-way data binding. It leverages native HTML `<input>` properties while adding unified visual configurations via Bestiary UI.

::: info Theming
This component is built on top of the Bestiary UI CSS framework. For CSS classes, anatomy, and CSS custom properties (tokens), refer to the [InputText Style API](../../style/components/data-entry/inputtext).
:::

## Import

```vue
<script setup>
import { BInputText } from '@bestiary-ui/components';
</script>
```

## API Reference

### Props
Any standard HTML attribute (e.g., `placeholder`, `type`, `maxlength`) passed to the component will automatically fall through to the underlying `<input>` element.

| Name         | Type                       | Default     | Description                                                                        |
|:-------------|:---------------------------|:------------|:-----------------------------------------------------------------------------------|
| `modelValue` | `string \| number \| null` | `null`      | Value of the input. **Supports `v-model`.**                                        |
| `size`       | `InputTextSize`            | `'medium'`  | Size of the input component. Valid values: `'small'`, `'medium'`, `'large'`.       |
| `variant`    | `InputTextVariant`         | `'outline'` | Visual style variant of the input. Valid values: `'outline'`, `'filled'`.          |
| `invalid`    | `boolean`                  | `false`     | Sets the input to an error state. Applies error styling and `aria-invalid="true"`. |
| `fluid`      | `boolean`                  | `false`     | Forces the input to span the full width (`100%`) of its container.                 |
| `rounded`    | `boolean`                  | `false`     | Applies fully rounded pill-shaped corners.                                         |
| `disabled`   | `boolean`                  | `false`     | Disables the input, preventing interaction and focus.                              |
| `readonly`   | `boolean`                  | `false`     | Makes the input read-only. Allows text selection but prevents editing.             |

### Exposed API
You can access these methods and properties by attaching a template ref (`ref="myInput"`) to the component.

| Name    | Type                       | Description                                                |
|:--------|:---------------------------|:-----------------------------------------------------------|
| `input` | `HTMLInputElement \| null` | Reference to the underlying native HTML `<input>` element. |
| `focus` | `Function`                 | Programmatically sets focus to the input.                  |
| `blur`  | `Function`                 | Programmatically removes focus from the input.             |

## Examples

<script setup>
import { ref } from 'vue';
const basicValue = ref('');
const filledValue = ref('');
const invalidValue = ref('Wrong input');
</script>

### Basic
Use `v-model` for two-way data binding. Standard HTML attributes like `placeholder` are automatically passed down to the input.

<div class="card">
    <BInputText v-model="basicValue" placeholder="Enter your name" />
    <span class="text-text-muted text-sm">Value: {{ basicValue || 'Empty' }}</span>
</div>

```vue
<script setup>
import { ref } from 'vue';

const value = ref('');
</script>

<template>
    <BInputText v-model="value" placeholder="Enter your name" />
</template>
```

### Variants
The `variant` prop controls the background and border rendering. `'filled'` removes borders and applies a subtle background that reverts to `'outline'` styling upon focus.

<div class="card">
    <BInputText placeholder="Outline (Default)" />
    <BInputText v-model="filledValue" variant="filled" placeholder="Filled variant" />
</div>

```vue
<template>
    <BInputText placeholder="Outline (Default)" />
    <BInputText variant="filled" placeholder="Filled variant" />
</template>
```

### Sizes
Use the `size` prop to scale the component. This adjusts the height, padding, and font size proportionally.

<div class="card">
    <BInputText size="small" placeholder="Small" />
    <BInputText placeholder="Medium" />
    <BInputText size="large" placeholder="Large" />
</div>

```vue
<template>
    <BInputText size="small" placeholder="Small" />
    <BInputText placeholder="Medium" />
    <BInputText size="large" placeholder="Large" />
</template>
```

### Validation & States
Use the `invalid`, `disabled`, and `readonly` props to control the interactive state of the input. The component automatically manages `aria-invalid` for screen readers.

<div class="card">
    <BInputText v-model="invalidValue" invalid placeholder="Error state" />
    <BInputText disabled placeholder="Disabled" />
    <BInputText readonly value="Read-only data" />
</div>

```vue
<script setup>
import { ref } from 'vue';

const value = ref('Wrong input');
</script>

<template>
    <BInputText v-model="value" invalid placeholder="Error state" />
    <BInputText disabled placeholder="Disabled" />
    <BInputText readonly value="Read-only data" />
</template>
```

### Layout Shapes
Use `fluid` to stretch the input to 100% of its parent container. Use `rounded` to apply pill-shaped geometry.

<div class="card">
    <BInputText fluid placeholder="Fluid width (100%)" />
    <div>
        <BInputText rounded placeholder="Rounded corners" />
    </div>
</div>

```vue
<template>
    <BInputText fluid placeholder="Fluid width (100%)" />
    <BInputText rounded placeholder="Rounded corners" />
</template>
```