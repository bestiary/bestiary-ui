# Breadcrumb Style API <VersionBadge module="style" />
Breadcrumbs provide contextual navigation for users, indicating their current location within a hierarchical site structure. The component is highly accessible, relying on standard `<nav>` and `<ol>` HTML elements and using `aria-` attributes for active and disabled states.

## Anatomy
The Breadcrumb component strictly separates the background container, the list structure, and the interactive elements.

| Class                      | Role          | Description                                                                             |
|:---------------------------|:--------------|:----------------------------------------------------------------------------------------|
| `.b-breadcrumb`            | **Container** | The root `<nav>` element. Applies the background, padding, and border radius.           |
| `.b-breadcrumb__list`      | **Wrapper**   | An `<ol>` flex container managing the flow and gap between items and separators.        |
| `.b-breadcrumb__item`      | **Element**   | An `<li>` flex wrapper for individual breadcrumb links.                                 |
| `.b-breadcrumb__link`      | **Element**   | The interactive anchor or span. Handles typography, hover colors, and focus rings.      |
| `.b-breadcrumb__icon`      | **Element**   | Wrapper for SVG or icon fonts, automatically scaling via `em` units to match text size. |
| `.b-breadcrumb__label`     | **Element**   | Wraps the text content of the breadcrumb item.                                          |
| `.b-breadcrumb__separator` | **Element**   | An `<li>` used strictly for visual separation between items (`aria-hidden="true"`).     |

## States & Accessibility
State styling is handled exclusively through semantic `aria-*` attributes applied to `.b-breadcrumb__link`.

| Attribute / State       | Behavior                                                                                        |
|:------------------------|:------------------------------------------------------------------------------------------------|
| `aria-current="page"`   | Designates the current page (last item). Modifies text color and disables the hover transition. |
| `aria-disabled="true"`  | Reduces opacity to `0.5` and applies `pointer-events: none` to disable interactions visually.   |

## Public API Tokens
Override these on a specific instance for one-off customizations.

### Layout & Surface
| Token                          | Default                             |
|:-------------------------------|:------------------------------------|
| `--b-breadcrumb-padding`       | `var(--b-space-3) var(--b-space-4)` |
| `--b-breadcrumb-background`    | `var(--b-surface-section)`          |
| `--b-breadcrumb-border-radius` | `var(--b-radius-container)`         |
| `--b-breadcrumb-gap`           | `var(--b-space-2)`                  |

### Typography & Colors
| Token                              | Default                                |
|:-----------------------------------|:---------------------------------------|
| `--b-breadcrumb-font-size`         | `var(--b-text-sm)`                     |
| `--b-breadcrumb-font-weight`       | `var(--b-font-weight-medium)`          |
| `--b-breadcrumb-link-color`        | `var(--b-text-secondary)`              |
| `--b-breadcrumb-link-hover-color`  | `var(--b-primary-solid-background)`    |
| `--b-breadcrumb-active-color`      | `var(--b-text-primary)`                |
| `--b-breadcrumb-separator-color`   | `var(--b-text-muted)`                  |
| `--b-breadcrumb-transition`        | `color ...`                            |

## Examples & Implementation

### Basic Navigation
A standard text-based breadcrumb trail. Note the use of `aria-current="page"` on the final item.

<div class="card">
    <nav class="b-breadcrumb" aria-label="Breadcrumb">
        <ol class="b-breadcrumb__list">
            <li class="b-breadcrumb__item b-breadcrumb__item--home">
                <a href="#" class="b-breadcrumb__link">
                    <span class="b-breadcrumb__label">Home</span>
                </a>
            </li>
            <li class="b-breadcrumb__separator" aria-hidden="true">/</li>
            <li class="b-breadcrumb__item">
                <a href="#" class="b-breadcrumb__link">
                    <span class="b-breadcrumb__label">Components</span>
                </a>
            </li>
            <li class="b-breadcrumb__separator" aria-hidden="true">/</li>
            <li class="b-breadcrumb__item">
                <a href="#" class="b-breadcrumb__link" aria-current="page">
                    <span class="b-breadcrumb__label">Breadcrumb</span>
                </a>
            </li>
        </ol>
    </nav>
</div>

```html
<nav class="b-breadcrumb" aria-label="Breadcrumb">
    <ol class="b-breadcrumb__list">
        
        <!-- Parent Link -->
        <li class="b-breadcrumb__item b-breadcrumb__item--home">
            <a href="/home" class="b-breadcrumb__link">
                <span class="b-breadcrumb__label">Home</span>
            </a>
        </li>
        
        <!-- Separator -->
        <li class="b-breadcrumb__separator" aria-hidden="true">/</li>
        
        <!-- Intermediate Link -->
        <li class="b-breadcrumb__item">
            <a href="/components" class="b-breadcrumb__link">
                <span class="b-breadcrumb__label">Components</span>
            </a>
        </li>
        
        <li class="b-breadcrumb__separator" aria-hidden="true">/</li>
        
        <!-- Active Page -->
        <li class="b-breadcrumb__item">
            <a href="#" class="b-breadcrumb__link" aria-current="page">
                <span class="b-breadcrumb__label">Breadcrumb</span>
            </a>
        </li>
        
    </ol>
</nav>
```

### With Icons & Disabled Items
Icons can be injected into the `.b-breadcrumb__link` wrapper. Use `aria-disabled="true"` to render non-interactive links.

<div class="card">
    <nav class="b-breadcrumb" aria-label="Breadcrumb">
        <ol class="b-breadcrumb__list">
            <li class="b-breadcrumb__item b-breadcrumb__item--home">
                <a href="#" class="b-breadcrumb__link" aria-label="Home">
                    <svg class="b-breadcrumb__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </a>
            </li>
            <li class="b-breadcrumb__separator" aria-hidden="true">></li>
            <li class="b-breadcrumb__item">
                <a href="#" class="b-breadcrumb__link" aria-disabled="true">
                    <span class="b-breadcrumb__label">Settings</span>
                </a>
            </li>
            <li class="b-breadcrumb__separator" aria-hidden="true">></li>
            <li class="b-breadcrumb__item">
                <a href="#" class="b-breadcrumb__link" aria-current="page">
                    <svg class="b-breadcrumb__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span class="b-breadcrumb__label">Account</span>
                </a>
            </li>
        </ol>
    </nav>
</div>

```html
<nav class="b-breadcrumb" aria-label="Breadcrumb">
    <ol class="b-breadcrumb__list">
        
        <!-- Icon Only Home Link -->
        <li class="b-breadcrumb__item b-breadcrumb__item--home">
            <a href="#" class="b-breadcrumb__link" aria-label="Home">
                <svg class="b-breadcrumb__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <!-- SVG Paths -->
                </svg>
            </a>
        </li>
        
        <li class="b-breadcrumb__separator" aria-hidden="true">></li>
        
        <!-- Disabled Link -->
        <li class="b-breadcrumb__item">
            <a href="#" class="b-breadcrumb__link" aria-disabled="true">
                <span class="b-breadcrumb__label">Settings</span>
            </a>
        </li>
        
        <li class="b-breadcrumb__separator" aria-hidden="true">></li>
        
        <!-- Mixed Icon + Label Active Link -->
        <li class="b-breadcrumb__item">
            <a href="#" class="b-breadcrumb__link" aria-current="page">
                <svg class="b-breadcrumb__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <!-- SVG Paths -->
                </svg>
                <span class="b-breadcrumb__label">Account</span>
            </a>
        </li>
        
    </ol>
</nav>
```