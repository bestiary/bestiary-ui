# Card Style API <VersionBadge module="style" />
Cards are flexible, highly structural containers used to group related content and actions. The component relies on a strict internal flexbox layout to automatically manage spacing, typography alignment, and footer positioning.

## Anatomy
The card separates media (header) from internal content (body). The body uses `flex-grow: 1` to ensure uniform heights when cards are placed in a grid, pushing the footer to the bottom.

| Class                  | Role          | Description                                                                              |
|:-----------------------|:--------------|:-----------------------------------------------------------------------------------------|
| `.b-card`              | **Container** | The root wrapper. Applies borders, background, radius, and shadows.                      |
| `.b-card__header`      | **Element**   | Top section for media. Forces nested `<img>` tags to span full width.                    |
| `.b-card__body`        | **Wrapper**   | Flex column containing the title, content, and footer. Manages structural padding.       |
| `.b-card__title-group` | **Wrapper**   | Flex container for the title and subtitle to manage tight spacing (`var(--b-space-1)`).  |
| `.b-card__title`       | **Element**   | Renders the main headline typography tokens.                                             |
| `.b-card__subtitle`    | **Element**   | Renders the subtitle typography tokens (usually muted).                                  |
| `.b-card__content`     | **Element**   | The main content area. Applies base typography and color.                                |
| `.b-card__footer`      | **Element**   | Action area. Uses `margin-top: auto` to anchor to the bottom of stretched cards.         |

## Modifiers

### 1. Sizes
Adjusts the global padding and internal gaps within the `.b-card__body`.

| Class                 | Padding Token      | Gap Token          | Description                             |
|:----------------------|:-------------------|:-------------------|:----------------------------------------|
| `.b-card--size-small` | `var(--b-space-3)` | `var(--b-space-1)` | Compact layout for dense lists.         |
| *(None / Default)*    | `var(--b-space-5)` | `var(--b-space-2)` | Standard layout.                        |
| `.b-card--size-large` | `var(--b-space-8)` | `var(--b-space-4)` | Hero cards or prominent panels.         |
| `.b-card--size-none`  | `0`                | `0`                | Flush edges, useful for utility panels. |

### 2. Shadows (Elevation)
Controls how the box-shadow behaves. By default, standard elevation (`var(--b-shadow-md)`) relies on the system's ambient shadow configuration.

| Class                    | Behavior                                                                   |
|:-------------------------|:---------------------------------------------------------------------------|
| *(Default)*              | Follows standard structural CSS. Shadows apply if configured globally.     |
| `.b-card--shadow-always` | Forces `var(--b-card-shadow)` statically.                                  |
| `.b-card--shadow-hover`  | Removes static shadow; applies `var(--b-card-shadow)` only on `:hover`.    |
| `.b-card--shadow-never`  | Forces no shadow.                                                          |

## Public API Tokens
Override these on a specific instance for one-off customizations.

### Layout & Surface
| Token                      | Default                               |
|:---------------------------|:--------------------------------------|
| `--b-card-padding`         | `var(--b-space-5)`                    |
| `--b-card-gap`             | `var(--b-space-2)`                    |
| `--b-card-border-radius`   | `var(--b-radius-container)`           |
| `--b-card-border-color`    | `var(--b-border-subtle)`              |
| `--b-card-background`      | `var(--b-surface-section)`            |
| `--b-card-color`           | `var(--b-text-primary)`               |
| `--b-card-shadow`          | `var(--b-shadow-md)`                  |

### Typography
| Token                           | Default                     |
|:--------------------------------|:----------------------------|
| `--b-card-title-font-size`      | `var(--b-h5-size)`          |
| `--b-card-title-font-weight`    | `var(--b-font-weight-bold)` |
| `--b-card-title-color`          | `var(--b-text-primary)`     |
| `--b-card-subtitle-font-size`   | `var(--b-caption-size)`     |
| `--b-card-subtitle-font-weight` | `var(--b-caption-weight)`   |
| `--b-card-subtitle-color`       | `var(--b-text-muted)`       |
| `--b-card-content-font-size`    | `var(--b-body-size)`        |
| `--b-card-content-font-weight`  | `var(--b-body-weight)`      |
| `--b-card-content-color`        | `var(--b-text-primary)`     |

## Examples & Implementation

### Basic Card
The minimum structure typically includes the body, title group, and content. The root node can be semantic (e.g., `<article>`).

<div class="flex justify-center">
    <article class="b-card b-card--shadow-always" style="max-width: 400px;">
        <div class="b-card__body">
            <div class="b-card__title-group">
                <h3 class="b-card__title">Design Principles</h3>
                <p class="b-card__subtitle">Core philosophy of Bestiary UI</p>
            </div>
            <div class="b-card__content">
                Build interfaces using low-specificity CSS, strict token typing via Houdini, and structural separation of concerns.
            </div>
        </div>
    </article>
</div>

```html
<article class="b-card b-card--shadow-always" style="max-width: 400px;">
    <div class="b-card__body">
        <div class="b-card__title-group">
            <h3 class="b-card__title">Design Principles</h3>
            <p class="b-card__subtitle">Core philosophy of Bestiary UI</p>
        </div>
        <div class="b-card__content">
            Build interfaces using low-specificity CSS, strict token typing via Houdini, and structural separation of concerns.
        </div>
    </div>
</article>
```

### Media Header & Footer Actions
When passing an image into `.b-card__header`, the border radius is naturally clipped by the parent's `overflow: hidden`. The `.b-card__footer` allows for grouped actions.

<div class="flex justify-center">
    <div class="b-card b-card--shadow-hover" style="max-width: 350px;">
        <div class="b-card__header">
            <img src="https://picsum.photos/400/200" alt="Abstract placeholder" />
        </div>
        <div class="b-card__body">
            <div class="b-card__title-group">
                <div class="b-card__title">System Architecture</div>
            </div>
            <div class="b-card__content">
                Discover the token pipeline and essence matrices that power our unified component ecosystem.
            </div>
            <div class="b-card__footer flex gap-2">
                <button class="b-button"><span class="b-button__label">Read Docs</span></button>
                <button class="b-button b-button--variant-outline b-button--severity-secondary"><span class="b-button__label">Cancel</span></button>
            </div>
        </div>
    </div>
</div>

```html
<div class="b-card b-card--shadow-hover">
    <!-- Header -->
    <div class="b-card__header">
        <img src="/path/to/image.jpg" alt="Cover" />
    </div>

    <!-- Body -->
    <div class="b-card__body">
        <div class="b-card__title-group">
            <div class="b-card__title">System Architecture</div>
        </div>
        <div class="b-card__content">
            Discover the token pipeline and essence matrices that power our unified component ecosystem.
        </div>
        
        <!-- Footer -->
        <div class="b-card__footer flex gap-2">
            <button class="b-button">
                <span class="b-button__label">Read Docs</span>
            </button>
            <button class="b-button b-button--variant-outline b-button--severity-secondary">
                <span class="b-button__label">Cancel</span>
            </button>
        </div>
    </div>
</div>
```

### Sizes
You can toggle structural padding dynamically via modifiers.

<div class="flex justify-center items-center gap-4">
    <div class="b-card b-card--size-small b-card--shadow-always" style="width: 250px;">
        <div class="b-card__body">
            <div class="b-card__title">Small Card</div>
            <div class="b-card__content">Compact padding and gaps.</div>
        </div>
    </div>
    <div class="b-card b-card--size-large b-card--shadow-always" style="width: 300px;">
        <div class="b-card__body">
            <div class="b-card__title">Large Card</div>
            <div class="b-card__content">Increased whitespace for prominence.</div>
        </div>
    </div>
</div>

```html
<div class="b-card b-card--size-small b-card--shadow-always">
    <div class="b-card__body">
        <div class="b-card__title">Small Card</div>
        <div class="b-card__content">...</div>
    </div>
</div>

<div class="b-card b-card--size-large b-card--shadow-always">
    <div class="b-card__body">
        <div class="b-card__title">Large Card</div>
        <div class="b-card__content">...</div>
    </div>
</div>
```