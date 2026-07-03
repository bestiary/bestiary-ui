# Paginator Style API <VersionBadge module="style" />
The Paginator component provides navigation for large datasets. It features a flexible internal layout capable of displaying page links, next/previous buttons, jump-to-page inputs, rows-per-page dropdowns, and dynamic text reports.

## Anatomy
The paginator relies on a flexbox structure. The main container distributes space between custom start/end slots and the centralized `.b-paginator__content` wrapper.

| Class                        | Role          | Description                                                                      |
|:-----------------------------|:--------------|:---------------------------------------------------------------------------------|
| `.b-paginator`               | **Container** | The root `<nav>` element. Applies padding, background, and flex layout.          |
| `.b-paginator__content`      | **Wrapper**   | Centered flex container that wraps the dynamically ordered pagination elements.  |
| `.b-paginator__button`       | **Element**   | Shared class for all clickable buttons (Pages, Next, Prev, First, Last).         |
| `.b-paginator__pages`        | **Wrapper**   | Flex container specifically for grouping numbered page buttons.                  |
| `.b-paginator__page--active` | **State**     | Modifier applied to the current page button. Overrides hover transitions.        |
| `.b-paginator__select`       | **Element**   | Native `<select>` element with custom SVG arrows for the rows-per-page dropdown. |
| `.b-paginator__input`        | **Element**   | Native `<input type="number">` element for jumping directly to a page.           |
| `.b-paginator__report`       | **Element**   | Read-only text span displaying current status (e.g., "Showing 1 to 10 of 50").   |

## States & Accessibility
State handling relies on standard HTML attributes for maximum screen-reader compatibility.

| Attribute / State     | Element                | Behavior                                                                          |
|:----------------------|:-----------------------|:----------------------------------------------------------------------------------|
| `aria-current="page"` | `.b-paginator__button` | Designates the active page. Paired visually with `.b-paginator__page--active`.    |
| `:disabled`           | `.b-paginator__button` | Reduces opacity to `0.5`, sets cursor to `not-allowed`, and drops pointer events. |
| `aria-live="polite"`  | `.b-paginator__report` | Notifies assistive technologies when the report text changes dynamically.         |

## Public API Tokens
Override these on a specific instance for one-off customizations.

### Layout & Sizing
| Token                         | Default                             | Description                                               |
|:------------------------------|:------------------------------------|:----------------------------------------------------------|
| `--b-paginator-padding`       | `var(--b-space-2) var(--b-space-4)` | Root container padding.                                   |
| `--b-paginator-gap`           | `var(--b-space-1)`                  | Gap between internal buttons and elements.                |
| `--b-paginator-button-size`   | `var(--b-size-8)`                   | Fixed width/height for square buttons, height for inputs. |
| `--b-paginator-button-radius` | `var(--b-radius-interactive)`       | Border radius applied to buttons and inputs.              |

### Colors
| Token                                   | Default                             | Description                             |
|:----------------------------------------|:------------------------------------|:----------------------------------------|
| `--b-paginator-button-color`            | `var(--b-text-secondary)`           | Default icon/text color for buttons.    |
| `--b-paginator-button-hover-background` | `var(--b-primary-overlay)`          | Background applied to buttons on hover. |
| `--b-paginator-button-hover-text`       | `var(--b-text-primary)`             | Text color applied to buttons on hover. |
| `--b-paginator-active-background`       | `var(--b-primary-solid-background)` | Background for the active page button.  |
| `--b-paginator-active-color`            | `var(--b-primary-solid-text)`       | Text color for the active page button.  |
| `--b-paginator-input-background`        | `var(--b-surface-section)`          | Background for selects and inputs.      |
| `--b-paginator-input-border`            | `var(--b-border-default)`           | Border color for selects and inputs.    |
| `--b-paginator-input-text`              | `var(--b-text-primary)`             | Text color for selects and inputs.      |

## Examples & Implementation

### Basic Pagination
The standard implementation features navigation icons and numbered pages. The First/Prev buttons are disabled on page 1.

<div class="card">
    <nav class="b-paginator" aria-label="Pagination">
        <div class="b-paginator__content">
            <!-- First & Prev -->
            <button class="b-paginator__button" disabled aria-label="Go to first page">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41M6 6h2v12H6V6z"/></svg>
            </button>
            <button class="b-paginator__button" disabled aria-label="Go to previous page">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
            </button>
            <!-- Pages -->
            <div class="b-paginator__pages">
                <button class="b-paginator__button b-paginator__page b-paginator__page--active" aria-label="Page 1" aria-current="page">1</button>
                <button class="b-paginator__button b-paginator__page" aria-label="Page 2">2</button>
                <button class="b-paginator__button b-paginator__page" aria-label="Page 3">3</button>
                <button class="b-paginator__button b-paginator__page" aria-label="Page 4">4</button>
            </div>
            <!-- Next & Last -->
            <button class="b-paginator__button" aria-label="Go to next page">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
            </button>
            <button class="b-paginator__button" aria-label="Go to last page">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.59 16.59L10.18 12 5.59 7.41 7 6l6 6-6 6-1.41-1.41M16 6h2v12h-2V6z"/></svg>
            </button>
        </div>
    </nav>
</div>

```html
<nav class="b-paginator" aria-label="Pagination">
    <div class="b-paginator__content">
        
        <button class="b-paginator__button" disabled aria-label="Go to previous page">
            <!-- Prev Icon SVG -->
        </button>
        
        <div class="b-paginator__pages">
            <button class="b-paginator__button b-paginator__page b-paginator__page--active" aria-current="page">1</button>
            <button class="b-paginator__button b-paginator__page">2</button>
            <button class="b-paginator__button b-paginator__page">3</button>
        </div>
        
        <button class="b-paginator__button" aria-label="Go to next page">
            <!-- Next Icon SVG -->
        </button>
        
    </div>
</nav>
```

### Full Features (Selects, Inputs, Reports)
A complete paginator configuration utilizing native `<select>` and `<input type="number">` elements, cleanly styled to match the buttons.

<div class="card flex justify-center">
    <nav class="b-paginator" aria-label="Pagination">
        <div class="b-paginator__content">
            <span class="b-paginator__report" aria-live="polite">Showing 11 to 20 of 120</span>
            <button class="b-paginator__button" aria-label="Go to previous page">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
            </button>
            <input type="number" class="b-paginator__input" value="2" min="1" max="12" aria-label="Jump to page" />
            <button class="b-paginator__button" aria-label="Go to next page">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
            </button>
            <select class="b-paginator__select" aria-label="Rows per page">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
        </div>
    </nav>
</div>

```html
<nav class="b-paginator" aria-label="Pagination">
    <div class="b-paginator__content">
        <!-- Status Report -->
        <span class="b-paginator__report" aria-live="polite">Showing 11 to 20 of 120</span>
        
        <button class="b-paginator__button">Prev</button>
        
        <!-- Jump to Page Input -->
        <input type="number" class="b-paginator__input" value="2" min="1" max="12" aria-label="Jump to page" />
        
        <button class="b-paginator__button">Next</button>
        
        <!-- Rows per Page Dropdown -->
        <select class="b-paginator__select" aria-label="Rows per page">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
        </select>
    </div>
</nav>
```