# Avatar Style API <VersionBadge module="style" />
A modular visual element for representing users or entities through images, initials, or icons.

## Anatomy
The component follows a strict BEM structure. Use the correct internal class based on the content type:

| Class              | Role          | Requirement                                       |
|:-------------------|:--------------|:--------------------------------------------------|
| `.b-avatar`        | **Container** | The main wrapper. Sets dimensions and background. |
| `.b-avatar__image` | **Image**     | Used for user photos.                             |
| `.b-avatar__label` | **Initials**  | Used for text. Automatically uppercased.          |
| `.b-avatar__icon`  | **Icon**      | Wrapper for SVG icons. Sets dimensions.           |

## Modifiers
Predefined classes to change the scale and shape of the avatar.

### Sizes
| Class                    | Size Token           | Default Pixels |
|:-------------------------|:---------------------|:---------------|
| `.b-avatar--size-small`  | `--b-avatar-sm-size` | `16px`         |
| `.b-avatar--size-medium` | `--b-avatar-md-size` | `24px`         |
| `.b-avatar--size-large`  | `--b-avatar-lg-size` | `32px`         |
| `.b-avatar--size-xlarge` | `--b-avatar-xl-size` | `48px`         |

### Shapes
| Class                     | Radius Token             | Description               |
|:--------------------------|:-------------------------|:--------------------------|
| `.b-avatar--shape-square` | `--b-radius-interactive` | Standard rounded corners. |
| `.b-avatar--shape-circle` | `--b-radius-full`        | Perfect circular shape.   |

## Public API Tokens
Bestiary UI provides a multi-level token system. You can modify **Core Tokens** for a specific instance or redefine **Scale Presets** to change how all avatars of a certain size look across your application.

### 1. Core Tokens
These tokens are directly consumed by the `.b-avatar` container. Use them for specific, one-off styling.

| Token                      | Description                               |
|:---------------------------|:------------------------------------------|
| `--b-avatar-size`          | Width and height of the root container.   |
| `--b-avatar-background`    | Background color of the container.        |
| `--b-avatar-color`         | Color for initials and icons.             |
| `--b-avatar-border-radius` | Corner rounding of the container.         |
| `--b-avatar-border`        | Border shorthand (e.g., `2px solid red`). |
| `--b-avatar-font-size`     | Font size for initials.                   |
| `--b-avatar-font-family`   | Font family for initials.                 |
| `--b-avatar-font-weight`   | Font weight for initials.                 |
| `--b-avatar-icon-size`     | Size of the SVG icon.                     |
| `--b-avatar-transition`    | Transition timing and easing.             |

### 2. Scale Presets
These tokens define the default values for each size modifier. When you use `.b-avatar--size-small`, it assigns the `sm` tokens to the core tokens.

| Token                     | Description                     |
|:--------------------------|:--------------------------------|
| `--b-avatar-sm-size`      | Width/Height for small size.    |
| `--b-avatar-sm-font-size` | Font size for small initials.   |
| `--b-avatar-sm-icon-size` | Icon size for small size.       |
| `--b-avatar-md-size`      | Width/Height for medium size.   |
| `--b-avatar-md-font-size` | Font size for medium initials.  |
| `--b-avatar-md-icon-size` | Icon size for medium size.      |
| `--b-avatar-lg-size`      | Width/Height for large size.    |
| `--b-avatar-lg-font-size` | Font size for large initials.   |
| `--b-avatar-lg-icon-size` | Icon size for large size.       |
| `--b-avatar-xl-size`      | Width/Height for x-large size.  |
| `--b-avatar-xl-font-size` | Font size for x-large initials. |
| `--b-avatar-xl-icon-size` | Icon size for x-large size.     |

### 3. Group Tokens
Specific tokens for the `.b-avatar-group` component.

| Token                           | Description                        |
|:--------------------------------|:-----------------------------------|
| `--b-avatar-group-overlap`      | Negative margin for items overlap. |
| `--b-avatar-group-border-width` | Protective border thickness.       |
| `--b-avatar-group-border-color` | Color of the protective border.    |

## Examples & Implementation

### Basic Implementation
The simplest form of an avatar using an image or a text label.

<div class="card">
  <div class="b-avatar">
    <img src="https://i.pravatar.cc/150?u=1" class="b-avatar__image" alt="User">
  </div>
  <div class="b-avatar">
    <span class="b-avatar__label">JD</span>
  </div>
</div>

::: code-group
```html [Image]
<div class="b-avatar">
  <img src="avatar.jpg" class="b-avatar__image" alt="John Doe">
</div>
```
```html [Label]
<div class="b-avatar">
  <span class="b-avatar__label">JD</span>
</div>
```
:::

### With Icon
Using a centered icon inside the avatar container.

<div class="card">
    <div class="b-avatar b-avatar--size-large b-avatar--shape-circle">
        <svg class="b-avatar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    </div>
</div>

```html
<div class="b-avatar b-avatar--size-large b-avatar--shape-circle">
    <svg class="b-avatar__icon">...</svg>
</div>
```

### Size Variations
Using size modifiers to scale the component.

<div class="card items-center">
  <div class="b-avatar b-avatar--size-small"><span class="b-avatar__label">SM</span></div>
  <div class="b-avatar b-avatar--size-medium"><span class="b-avatar__label">MD</span></div>
  <div class="b-avatar b-avatar--size-large"><span class="b-avatar__label">LG</span></div>
  <div class="b-avatar b-avatar--size-xlarge"><span class="b-avatar__label">XL</span></div>
</div>

```html
<div class="b-avatar b-avatar--size-small"><span class="b-avatar__label">SM</span></div>
<div class="b-avatar b-avatar--size-medium"><span class="b-avatar__label">MD</span></div>
<div class="b-avatar b-avatar--size-large"><span class="b-avatar__label">LG</span></div>
<div class="b-avatar b-avatar--size-xlarge"><span class="b-avatar__label">XL</span></div>
```

### Shape Variations
Switching between square (rounded) and circular designs.

<div class="card">
  <div class="b-avatar b-avatar--shape-square"><span class="b-avatar__label">SQ</span></div>
  <div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">CR</span></div>
</div>

```html
<div class="b-avatar b-avatar--shape-square"><span class="b-avatar__label">SQ</span></div>
<div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">CR</span></div>
```

### With Badge
Avatars can be combined with status badges.

<div class="card">
    <div class="b-overlay-badge">
        <div class="b-avatar b-avatar--size-large b-avatar--shape-circle">
            <img src="https://i.pravatar.cc/150?u=5" class="b-avatar__image" alt="User">
        </div>
        <div class="b-overlay-badge__badge b-badge b-badge--severity-primary"></div>
    </div>
</div>

```html
<div class="b-overlay-badge">
    <div class="b-avatar b-avatar--size-large b-avatar--shape-circle">
        <img src="avatar.jpg" class="b-avatar__image" alt="User">
    </div>
    <div class="b-overlay-badge__badge b-badge b-badge--severity-primary"></div>
</div>
```

### Custom Styling (Token Overrides)
Example of using Public API Tokens to create a custom-colored large avatar.

<div class="card">
    <div class="b-avatar" style="--b-avatar-size: 64px; --b-avatar-background: var(--b-amber-500); --b-avatar-color: black; --b-avatar-border: 4px solid var(--b-amber-200);">
        <span class="b-avatar__label">VIP</span>
    </div>
</div>

```html
<div class="b-avatar" style="--b-avatar-size: 64px; --b-avatar-background: var(--b-amber-500); --b-avatar-color: black; --b-avatar-border: 4px solid var(--b-amber-200);">
    <span class="b-avatar__label">VIP</span>
</div>
```

### Avatar Group
Stacking multiple avatars with automatic overlap.

<div class="card">
  <div class="b-avatar-group">
    <div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">A</span></div>
    <div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">B</span></div>
    <div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">C</span></div>
  </div>
</div>

```html
<div class="b-avatar-group">
    <div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">A</span></div>
    <div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">B</span></div>
    <div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">C</span></div>
</div>
```