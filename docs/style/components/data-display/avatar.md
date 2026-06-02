# Avatar Style API <VersionBadge module="style" />
Avatars are visual indicators for users or entities, supporting images, icons, and text (initials). The system provides flexible sizing, shape modifiers, and a dedicated grouping container with automatic overlapping and border management.

## Anatomy

### Avatar

| Class               | Role          | Description                                                                 |
|:--------------------|:--------------|:----------------------------------------------------------------------------|
| `.b-avatar`         | **Container** | The root element. Sets dimensions, background, typography, and alignment.   |
| `.b-avatar__image`  | **Element**   | An `<img>` tag mapped to cover the entire container.                        |
| `.b-avatar__icon`   | **Element**   | Wrapper for SVG or icon fonts, standardizing dimensions.                    |
| `.b-avatar__label`  | **Element**   | Wrapper for text initials, applying uppercase formatting and font displays. |

### Avatar Group

| Class              | Role          | Description                                                                     |
|:-------------------|:--------------|:--------------------------------------------------------------------------------|
| `.b-avatar-group`  | **Container** | A flex wrapper for multiple avatars. Applies negative margins for overlapping.  |

## Modifiers

### 1. Sizes
Scales the container size, font size (for initials), and icon size proportionally based on the system control scales.

| Class                     | Container Size             | Font Size           | Icon Size               |
|:--------------------------|:---------------------------|:--------------------|:------------------------|
| `.b-avatar--size-small`   | `var(--b-control-size-sm)` | `var(--b-text-sm)`  | `var(--b-icon-size-sm)` |
| `.b-avatar--size-medium`  | `var(--b-control-size-md)` | `var(--b-text-md)`  | `var(--b-icon-size-md)` |
| `.b-avatar--size-large`   | `var(--b-control-size-lg)` | `var(--b-text-lg)`  | `var(--b-icon-size-lg)` |
| `.b-avatar--size-xlarge`  | `var(--b-control-size-xl)` | `var(--b-text-xl)`  | `var(--b-icon-size-xl)` |

### 2. Shapes

| Class                       | Border Radius Mapping         |
|:----------------------------|:------------------------------|
| `.b-avatar--shape-square`   | `var(--b-radius-interactive)` |
| `.b-avatar--shape-circle`   | `var(--b-radius-full)`        |

## Public API Tokens

### 1. Avatar Active Mapping (Renderer API)
Override these on a specific instance for one-off customizations.

| Token                      | Default                                       |
|:---------------------------|:----------------------------------------------| 
| `--b-avatar-size`          | `var(--b-control-size-md)`                    |
| `--b-avatar-font-size`     | `var(--b-text-md)`                            |
| `--b-avatar-icon-size`     | `var(--b-icon-size-md)`                       |
| `--b-avatar-border-radius` | `var(--b-radius-interactive)`                 |
| `--b-avatar-background`    | `var(--b-secondary-solid-background)`         |
| `--b-avatar-color`         | `var(--b-primary-subtle-text)`                |
| `--b-avatar-border`        | `0px solid transparent`                       |
| `--b-avatar-font-family`   | `var(--b-font-family-display)`                |
| `--b-avatar-font-weight`   | `var(--b-font-weight-medium)`                 |
| `--b-avatar-transition`    | `var(--b-duration-normal) var(--b-ease-base)` |

### 2. Avatar Group Tokens
Controls the layout and visual separation of avatars inside a `.b-avatar-group`. The group automatically injects the border tokens into its child avatars.

| Token                           | Default                       | Description                                |
|:--------------------------------|:------------------------------|:-------------------------------------------|
| `--b-avatar-group-overlap`      | `calc(var(--b-space-3) * -1)` | The negative margin between avatars.       |
| `--b-avatar-group-border-width` | `var(--b-stroke-md)`          | The thickness of the separating border.    |
| `--b-avatar-group-border-color` | `var(--b-surface-section)`    | The color of the protective border cutout. |

## Examples & Implementation

### Content Types (Text, Icon, Image)
By default, an avatar has a square shape and medium size.

<div class="card flex gap-4">
    <div class="b-avatar b-avatar--size-medium b-avatar--shape-square">
        <span class="b-avatar__label" aria-hidden="true">JD</span>
    </div>
    <div class="b-avatar b-avatar--size-medium b-avatar--shape-square">
        <svg class="b-avatar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    </div>
    <div class="b-avatar b-avatar--size-medium b-avatar--shape-square">
        <img class="b-avatar__image" src="https://i.pravatar.cc/150?u=1" alt="User profile picture" />
    </div>
</div>

```html
<!-- Text Label -->
<div class="b-avatar b-avatar--size-medium b-avatar--shape-square" aria-label="John Doe">
    <span class="b-avatar__label" aria-hidden="true">JD</span>
</div>

<!-- SVG Icon -->
<div class="b-avatar b-avatar--size-medium b-avatar--shape-square" aria-label="Guest User">
    <svg class="b-avatar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <!-- SVG Paths -->
    </svg>
</div>

<!-- Image -->
<div class="b-avatar b-avatar--size-medium b-avatar--shape-square">
    <img class="b-avatar__image" src="/path/to/image.jpg" alt="User profile picture" />
</div>
```

### Sizes

The component supports a standardized size scale from `small` to `xlarge`.

<div class="card flex items-center gap-4">
    <div class="b-avatar b-avatar--size-small b-avatar--shape-square">
        <span class="b-avatar__label" aria-hidden="true">SM</span>
    </div>
    <div class="b-avatar b-avatar--size-medium b-avatar--shape-square">
        <span class="b-avatar__label" aria-hidden="true">MD</span>
    </div>
    <div class="b-avatar b-avatar--size-large b-avatar--shape-square">
        <span class="b-avatar__label" aria-hidden="true">LG</span>
    </div>
    <div class="b-avatar b-avatar--size-xlarge b-avatar--shape-square">
        <span class="b-avatar__label" aria-hidden="true">XL</span>
    </div>
</div>

```html
<div class="b-avatar b-avatar--size-small b-avatar--shape-square">
    <span class="b-avatar__label" aria-hidden="true">SM</span>
</div>
<div class="b-avatar b-avatar--size-medium b-avatar--shape-square">
    <span class="b-avatar__label" aria-hidden="true">MD</span>
</div>
<div class="b-avatar b-avatar--size-large b-avatar--shape-square">
    <span class="b-avatar__label" aria-hidden="true">LG</span>
</div>
<div class="b-avatar b-avatar--size-xlarge b-avatar--shape-square">
    <span class="b-avatar__label" aria-hidden="true">XL</span>
</div>
```

### Shapes
You can toggle between interactive radii (`square`) and fully rounded geometry (`circle`).

<div class="card flex gap-4">
    <div class="b-avatar b-avatar--size-large b-avatar--shape-square">
        <span class="b-avatar__label" aria-hidden="true">SQ</span>
    </div>
    <div class="b-avatar b-avatar--size-large b-avatar--shape-circle">
        <span class="b-avatar__label" aria-hidden="true">CI</span>
    </div>
</div>

```html
<div class="b-avatar b-avatar--size-large b-avatar--shape-square">
    <span class="b-avatar__label" aria-hidden="true">SQ</span>
</div>
<div class="b-avatar b-avatar--size-large b-avatar--shape-circle">
    <span class="b-avatar__label" aria-hidden="true">CI</span>
</div>
```

### Avatar Group
Wrap avatars in a `.b-avatar-group` to stack them visually. The group container calculates overlapping margins and automatically applies a border ring to each avatar using `--b-avatar-group-border-color`.

<div class="card">
    <div class="b-avatar-group" role="group" aria-label="User avatars">
        <div class="b-avatar b-avatar--size-medium b-avatar--shape-circle">
            <img class="b-avatar__image" src="https://i.pravatar.cc/150?u=1" alt="User 1" />
        </div>
        <div class="b-avatar b-avatar--size-medium b-avatar--shape-circle">
            <img class="b-avatar__image" src="https://i.pravatar.cc/150?u=2" alt="User 2" />
        </div>
        <div class="b-avatar b-avatar--size-medium b-avatar--shape-circle">
            <img class="b-avatar__image" src="https://i.pravatar.cc/150?u=3" alt="User 3" />
        </div>
        <div class="b-avatar b-avatar--size-medium b-avatar--shape-circle">
            <span class="b-avatar__label" aria-hidden="true">+3</span>
        </div>
    </div>
</div>

```html
<div class="b-avatar-group" role="group" aria-label="User avatars">
    <div class="b-avatar b-avatar--size-medium b-avatar--shape-circle">
        <img class="b-avatar__image" src="/user-1.jpg" alt="User 1" />
    </div>
    <div class="b-avatar b-avatar--size-medium b-avatar--shape-circle">
        <img class="b-avatar__image" src="/user-2.jpg" alt="User 2" />
    </div>
    <div class="b-avatar b-avatar--size-medium b-avatar--shape-circle">
        <img class="b-avatar__image" src="/user-3.jpg" alt="User 3" />
    </div>
    <div class="b-avatar b-avatar--size-medium b-avatar--shape-circle">
        <span class="b-avatar__label" aria-hidden="true">+3</span>
    </div>
</div>
```

::: tip Design Note
If placing an `.b-avatar-group` over a non-default background (like a dark header or primary block), override `--b-avatar-group-border-color` locally to match your container's background color so the separation rings blend seamlessly.
:::