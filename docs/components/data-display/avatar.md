<script setup> import { UserOutline } from '@bestiary-ui/icons'; </script>

# Avatar <VersionBadge module="components" />
Avatars are visual indicators for users or entities, supporting images, icons, and text initials. The Vue implementation handles graceful fallbacks if an image fails to load and provides `<BAvatarGroup>` for easy stacking.

::: info Theming
This component is built on top of the Bestiary UI CSS framework. For CSS classes, anatomy, and CSS custom properties (tokens), refer to the [Avatar Style API](../../style/components/data-display/avatar.md).
:::

## Import

```vue
<script setup>
import { BAvatar, BAvatarGroup } from '@bestiary-ui/components';
</script>
```

## API Reference

### Props

The following props apply to `<BAvatar>`.

| Name        | Type                  | Default    | Description                                                                      |
|:------------|:----------------------|:-----------|:---------------------------------------------------------------------------------|
| `size`      | `AvatarSize`          | `'medium'` | Size of the avatar. Valid values: `'small'`, `'medium'`, `'large'`, `'xlarge'`.  |
| `shape`     | `AvatarShape`         | `'square'` | Shape of the avatar. Valid values: `'square'`, `'circle'`.                       |
| `label`     | `string`              | `null`     | Text label (e.g., initials) to display. Automatically truncated to 2 characters. |
| `icon`      | `string \| Component` | `null`     | Icon class (e.g., `'pi pi-user'`) or an injected Vue component to display.       |
| `image`     | `string`              | `null`     | Source URL of the avatar image.                                                  |
| `imageAlt`  | `string`              | `'avatar'` | Accessible description for the image.                                            |
| `ariaLabel` | `string`              | `null`     | Accessible description for the wrapper (used when the image is not present).     |

### Events

| Name    | Parameters     | Description                                          |
|:--------|:---------------|:-----------------------------------------------------|
| `error` | `event: Event` | Emitted when the provided `image` URL fails to load. |

### Slots

**`BAvatar`**

| Name      | Description                                                                  |
|:----------|:-----------------------------------------------------------------------------|
| `default` | Overrides the internal content (image, icon, or label) with custom elements. |

**`BAvatarGroup`**

| Name      | Description                                                                 |
|:----------|:----------------------------------------------------------------------------|
| `default` | Slot for nesting `<BAvatar>` components. Handles overlapping automatically. |

## Examples

### Content Types
The avatar dynamically switches between image, icon, and text initials depending on the provided props. The `label` is automatically truncated to 2 characters and capitalized.

<div class="card flex gap-4">
    <BAvatar label="JD" />
    <BAvatar :icon="UserOutline" />
    <BAvatar image="https://i.pravatar.cc/150?u=1" imageAlt="John Doe" />
</div>

```vue
<template>
    <!-- Text Label -->
    <BAvatar label="JD" />

    <!-- Vue Component Icon -->
    <BAvatar :icon="UserOutline" />

    <!-- Image -->
    <BAvatar image="/path/to/image.jpg" imageAlt="John Doe" />
</template>
```

### Sizes
Use the `size` prop to scale the avatar component.

<div class="card flex items-center gap-4">
    <BAvatar label="SM" size="small" />
    <BAvatar label="MD" size="medium" />
    <BAvatar label="LG" size="large" />
    <BAvatar label="XL" size="xlarge" />
</div>

```vue
<template>
    <BAvatar label="SM" size="small" />
    <BAvatar label="MD" size="medium" />
    <BAvatar label="LG" size="large" />
    <BAvatar label="XL" size="xlarge" />
</template>
```

### Shapes
Use the `shape` prop to toggle between `square` (interactive radius) and `circle` (fully rounded).

<div class="card flex gap-4">
    <BAvatar label="SQ" size="large" shape="square" />
    <BAvatar label="CI" size="large" shape="circle" />
</div>

```vue
<template>
    <BAvatar label="SQ" size="large" shape="square" />
    <BAvatar label="CI" size="large" shape="circle" />
</template>
```

### Avatar Group
Wrap multiple `<BAvatar>` components in an `<BAvatarGroup>` to create an overlapping list. The separation borders are handled automatically.

<div class="card">
    <BAvatarGroup>
        <BAvatar image="https://i.pravatar.cc/150?u=1" shape="circle" />
        <BAvatar image="https://i.pravatar.cc/150?u=2" shape="circle" />
        <BAvatar image="https://i.pravatar.cc/150?u=3" shape="circle" />
        <BAvatar label="+3" shape="circle" />
    </BAvatarGroup>
</div>

```vue
<template>
    <BAvatarGroup>
        <BAvatar image="/user-1.jpg" shape="circle" />
        <BAvatar image="/user-2.jpg" shape="circle" />
        <BAvatar image="/user-3.jpg" shape="circle" />
        <BAvatar label="+3" shape="circle" />
    </BAvatarGroup>
</template>
```

### Image Fallback Behavior
If the `image` URL fails to load, `<BAvatar>` catches the error and automatically falls back to rendering the `icon` or `label` if they are provided.

<div class="card flex gap-4">
    <BAvatar image="invalid-url.jpg" label="FB" size="large" />
    <BAvatar image="invalid-url.jpg" :icon="UserOutline" size="large" />
</div>

```vue
<template>
    <!-- Will display "FB" because the image URL is broken -->
    <BAvatar image="broken-link.jpg" label="FB" size="large" />
    
    <!-- Will display the icon because the image URL is broken -->
    <BAvatar image="broken-link.jpg" icon="pi pi-exclamation-triangle" size="large" />
</template>
```