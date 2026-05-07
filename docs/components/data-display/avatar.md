<script setup>
import { UserOutline } from '@bestiary-ui/icons'
</script>

# Avatar <VersionBadge module="components" />
Avatar is a visual element used to represent users or entities through images, initials, or icons.

::: info Theming
Detailed information about CSS classes, customization tokens, and manual HTML implementation can be found in the [Style API Documentation](../../style/components/data-display/avatar).
:::

## Import

```javascript
import { BAvatar, BAvatarGroup } from "@bestiary-ui/components";
```

## Getting Started
The component priorities content in the following order: `image` -> `icon` -> `label` -> `slot`.

### Image
An image is displayed by providing a source URL via the `image` property.

<div class="card">
    <BAvatar image="https://i.pravatar.cc/150" imageAlt="User Name" />
</div>

```vue
<BAvatar image="avatar.jpg" imageAlt="User" />
```

### Label
The `label` property is used to display text, such as initials. Labels are automatically truncated to 2 characters.

<div class="card">
    <BAvatar label="JD" />
</div>

```vue
<BAvatar label="JD" />
```

### Icon
An icon component or class can be assigned to the `icon` property.

<div class="card">
    <BAvatar :icon="UserOutline" />
</div>

```vue
<BAvatar :icon="UserOutline" />
```

## Configurations

### Sizes
Avatar offers four built-in sizes: `small`, `medium` (default), `large`, and `xlarge`.

<div class="card items-center">
    <BAvatar label="SM" size="small" />
    <BAvatar label="MD" size="medium" />
    <BAvatar label="LG" size="large" />
    <BAvatar label="XL" size="xlarge" />
</div>

```vue
<BAvatar label="SM" size="small" />
<BAvatar label="MD" size="medium" />
<BAvatar label="LG" size="large" />
<BAvatar label="XL" size="xlarge" />
```

### Shapes
The default shape is `square` (with rounded corners). Use the `shape` property with the value `circle` for a perfectly circular design.

<div class="card">
    <BAvatar label="SQ" shape="square" />
    <BAvatar label="CR" shape="circle" />
</div>

```vue
<BAvatar label="SQ" shape="square" />
<BAvatar label="CR" shape="circle" />
```

## AvatarGroup
Multiple avatars can be grouped together using the `BAvatarGroup` component to display them in a stack with an automatic overlap.

<div class="card">
    <BAvatarGroup>
        <BAvatar image="https://i.pravatar.cc/150?u=1" shape="circle" />
        <BAvatar image="https://i.pravatar.cc/150?u=2" shape="circle" />
        <BAvatar image="https://i.pravatar.cc/150?u=3" shape="circle" />
        <BAvatar label="+5" shape="circle" />
    </BAvatarGroup>
</div>

```vue
<BAvatarGroup>
    <BAvatar image="https://i.pravatar.cc/150?u=1" shape="circle" />
    <BAvatar image="https://i.pravatar.cc/150?u=2" shape="circle" />
    <BAvatar image="https://i.pravatar.cc/150?u=3" shape="circle" />
    <BAvatar label="+5" shape="circle" />
</BAvatarGroup>
```

## API

### Avatar Properties

| Name       | Type                  | Default     | Description                                                                    |
|:-----------|:----------------------|:------------|:-------------------------------------------------------------------------------|
| `size`     | `string`              | `medium`    | Size of the avatar. Valid values are `small`, `medium`, `large`, and `xlarge`. |
| `shape`    | `string`              | `square`    | Shape of the avatar. Valid values are `square` and `circle`.                   |
| `label`    | `string`              | `undefined` | Text initials to display. Truncated to 2 characters.                           |
| `icon`     | `string \| Component` | `undefined` | Icon to display when image is not available.                                   |
| `image`    | `string`              | `undefined` | Source URL of the image.                                                       |
| `imageAlt` | `string`              | `avatar`    | Accessible description for the image.                                          |

### Avatar Events

| Name    | Parameters     | Description                                    |
|:--------|:---------------|:-----------------------------------------------|
| `error` | `event: Event` | Triggered when the image source fails to load. |

### Avatar Slots

| Name      | Description                                            |
|:----------|:-------------------------------------------------------|
| `default` | Custom content to display inside the avatar container. |

### AvatarGroup Slots

| Name      | Description                  |
|:----------|:-----------------------------|
| `default` | A set of BAvatar components. |