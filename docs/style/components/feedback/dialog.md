# Dialog Style API <VersionBadge module="style" />
The Dialog component renders a highly customizable modal overlay. It relies on a CSS flexbox masking system to handle multi-directional screen positioning, while providing robust internal structure for headers, dynamic content, and footers.

## Anatomy
The architecture consists of a full-screen fixed mask that centers (or aligns) the dialog window.

| Class                       | Role          | Description                                                                  |
|:----------------------------|:--------------|:-----------------------------------------------------------------------------|
| `.b-dialog-mask`            | **Overlay**   | A `fixed` flex container covering the viewport. Applies the dark background. |
| `.b-dialog`                 | **Container** | The main window. Uses flex column to layout header, content, and footer.     |
| `.b-dialog__header`         | **Element**   | Flex container for the title and action buttons. Handles drag cursor states. |
| `.b-dialog__title`          | **Element**   | Renders the typography for the dialog headline.                              |
| `.b-dialog__header-actions` | **Wrapper**   | Flex group holding the control buttons (close, maximize).                    |
| `.b-dialog__header-action`  | **Button**    | Shared class for icon buttons. Handles hover transitions and focus rings.    |
| `.b-dialog__content`        | **Element**   | The scrolling viewport (`overflow-y: auto`). Uses `flex: 1` to fill space.   |
| `.b-dialog__footer`         | **Element**   | Flex container for action buttons at the bottom.                             |

## Modifiers

### 1. Mask Modifiers
Controls the flex alignment of the dialog within the viewport.

| Class                           | Flex Alignment (Justify / Align Items) | Description                  |
|:--------------------------------|:---------------------------------------|:-----------------------------|
| `.b-dialog-mask--center`        | `center` / `center`                    | Default centered.            |
| `.b-dialog-mask--top`           | `center` / `flex-start`                | Anchors top with padding.    |
| `.b-dialog-mask--bottom`        | `center` / `flex-end`                  | Anchors bottom with padding. |
| `.b-dialog-mask--left`          | `flex-start` / `center`                | Anchors left with padding.   |
| `.b-dialog-mask--right`         | `flex-end` / `center`                  | Anchors right with padding.  |
| `.b-dialog-mask--topleft`       | `flex-start` / `flex-start`            | Anchors top-left.            |
| `.b-dialog-mask--topright`      | `flex-end` / `flex-start`              | Anchors top-right.           |
| `.b-dialog-mask--bottomleft`    | `flex-start` / `flex-end`              | Anchors bottom-left.         |
| `.b-dialog-mask--bottomright`   | `flex-end` / `flex-end`                | Anchors bottom-right.        |

| Class                           | Description                                                                     |
|:--------------------------------|:--------------------------------------------------------------------------------|
| `.b-dialog-mask--modal`         | Dims the background using `oklch` channels and applies a subtle backdrop blur.  |

### 2. Dialog Modifiers

| Class                           | Description                                                                              |
|:--------------------------------|:-----------------------------------------------------------------------------------------|
| `.b-dialog--maximized`          | Overrides sizing and borders to force the window to fill 100% of the viewport.           |
| `.b-dialog__header--draggable`  | Changes the cursor to `move` and prevents mobile touch-scrolling (`touch-action: none`). |

## Public API Tokens
Override these on a specific instance for one-off customizations.

### Layout & Sizing
| Token                        | Default                                                |
|:-----------------------------|:-------------------------------------------------------|
| `--b-dialog-radius`          | `var(--b-radius-xl)`                                   |
| `--b-dialog-header-padding`  | `var(--b-space-5)`                                     |
| `--b-dialog-header-gap`      | `var(--b-space-4)`                                     |
| `--b-dialog-content-padding` | `0 var(--b-space-5) var(--b-space-5) var(--b-space-5)` |
| `--b-dialog-footer-padding`  | `var(--b-space-4) var(--b-space-5)`                    |
| `--b-dialog-action-size`     | `var(--b-size-8)`                                      |

### Colors & Surfaces
| Token                                | Default                                | Description                           |
|:-------------------------------------|:---------------------------------------|:--------------------------------------|
| `--b-dialog-mask-background`         | `oklch(var(--b-black-channels) / 50%)` | Triggered by `.b-dialog-mask--modal`. |
| `--b-dialog-background`              | `var(--b-surface-section)`             | Window background color.              |
| `--b-dialog-color`                   | `var(--b-text-primary)`                | Default text color.                   |
| `--b-dialog-border`                  | `1px solid var(--b-border-subtle)`     | Outer border of the window.           |
| `--b-dialog-shadow`                  | `var(--b-shadow-2xl)`                  | Outer shadow of the window.           |
| `--b-dialog-action-color`            | `var(--b-text-muted)`                  | Header icon color.                    |
| `--b-dialog-action-hover-background` | `var(--b-overlay-hover)`               | Header icon hover background.         |

## Examples & Implementation

### Basic Dialog
The minimum required DOM structure for a standard centered modal.

<div class="card">
    <div class="b-dialog-mask b-dialog-mask--center b-dialog-mask--modal" style="position: absolute;">
        <div class="b-dialog" role="dialog" aria-modal="true" style="width: 300px;">
            <!-- Header -->
            <div class="b-dialog__header">
                <div class="b-dialog__title">Basic Dialog</div>
                <div class="b-dialog__header-actions">
                    <button class="b-dialog__header-action" aria-label="Close">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    </button>
                </div>
            </div>
            <!-- Content -->
            <div class="b-dialog__content">
                <p>This is a standard dialog window with a header and content area.</p>
            </div>
        </div>
    </div>
</div>

```html
<!-- Usually Teleported to <body> -->
<div class="b-dialog-mask b-dialog-mask--center b-dialog-mask--modal">
    
    <div class="b-dialog" role="dialog" aria-modal="true">
        <div class="b-dialog__header">
            <h2 class="b-dialog__title" id="dialogTitle">Header Title</h2>
            <div class="b-dialog__header-actions">
                <button class="b-dialog__header-action" aria-label="Close">
                    <!-- Close SVG -->
                </button>
            </div>
        </div>

        <div class="b-dialog__content">
            <p>Main content goes here.</p>
        </div>
    </div>
    
</div>
```

### Full Features (Footer & Maximize)

A dialog utilizing all internal slots and the maximize button. Note the `aria-labelledby` usage.

<div class="card flex justify-center h-[400px] relative overflow-hidden bg-surface-base">
    <div class="b-dialog-mask b-dialog-mask--center b-dialog-mask--modal" style="position: absolute;">
        <div class="b-dialog" role="dialog" aria-modal="true" aria-labelledby="featureDialogTitle" style="width: 400px;">
            <div class="b-dialog__header b-dialog__header--draggable">
                <div class="b-dialog__title" id="featureDialogTitle">Terms of Service</div>
                <div class="b-dialog__header-actions">
                    <button class="b-dialog__header-action" aria-label="Maximize">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    </button>
                    <button class="b-dialog__header-action" aria-label="Close">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    </button>
                </div>
            </div>
            <div class="b-dialog__content" style="max-height: 150px;">
                <p>By clicking agree, you accept our structural design paradigms and low-specificity CSS rules.</p>
            </div>
            <div class="b-dialog__footer">
                <button class="b-button b-button--variant-text b-button--severity-secondary"><span class="b-button__label">Cancel</span></button>
                <button class="b-button"><span class="b-button__label">Agree</span></button>
            </div>
        </div>
    </div>
</div>

```html
<div class="b-dialog-mask b-dialog-mask--center b-dialog-mask--modal">
    <div class="b-dialog" role="dialog" aria-labelledby="featureDialogTitle">
        
        <!-- Draggable Header -->
        <div class="b-dialog__header b-dialog__header--draggable">
            <h2 class="b-dialog__title" id="featureDialogTitle">Terms of Service</h2>
            <div class="b-dialog__header-actions">
                <button class="b-dialog__header-action" aria-label="Maximize">
                    <!-- Maximize SVG -->
                </button>
                <button class="b-dialog__header-action" aria-label="Close">
                    <!-- Close SVG -->
                </button>
            </div>
        </div>

        <div class="b-dialog__content">
            <p>...</p>
        </div>

        <!-- Footer Actions -->
        <div class="b-dialog__footer">
            <button class="b-button b-button--variant-text b-button--severity-secondary">
                <span class="b-button__label">Cancel</span>
            </button>
            <button class="b-button">
                <span class="b-button__label">Agree</span>
            </button>
        </div>
        
    </div>
</div>
```