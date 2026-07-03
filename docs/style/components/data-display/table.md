# Table Style API <VersionBadge module="style" />
The Table component provides a comprehensive grid for displaying, sorting, filtering, and paginating tabular data. The layout relies heavily on native `<table>` elements wrapped in a responsive container, supported by advanced CSS custom properties for sizing and states.

## Anatomy
The structure manages the complex hierarchy of headers, rows, cells, and popovers used for advanced filtering.

| Class                             | Role          | Description                                                                           |
|:----------------------------------|:--------------|:--------------------------------------------------------------------------------------|
| `.b-table`                        | **Container** | The root node. Manages background, border-radius, and loading overlay positioning.    |
| `.b-table__wrapper`               | **Wrapper**   | Enables horizontal scrolling (`overflow-x: auto`) for responsive tables.              |
| `.b-table__el`                    | **Element**   | The native `<table>` tag. Uses `border-collapse: collapse`.                           |
| `.b-table__th` / `.b-table__td`   | **Element**   | Header and standard cells. Manage padding, borders, and text alignment.               |
| `.b-table__th-content`            | **Wrapper**   | Flex container inside the `<th/>` aligning the label, sort icons, and filter buttons. |
| `.b-table__sort-icon-group`       | **Wrapper**   | Stacked container for the up/down sort arrows.                                        |
| `.b-table__filter-menu-container` | **Wrapper**   | Relative container anchoring the filter popover.                                      |
| `.b-table__filter-popover`        | **Popover**   | Absolute dropdown containing filter inputs and action buttons.                        |
| `.b-table__loading-overlay`       | **Overlay**   | Absolute mask with `backdrop-filter` blocking interactions during loading.            |

## Modifiers

### 1. Sizes
Adjusts the padding of cells globally.

| Class                  | Padding Token         |
|:-----------------------|:----------------------|
| `.b-table--size-small` | `var(--b-space-2)`    |
| *(Default)*            | `var(--b-space-4)`    |
| `.b-table--size-large` | `var(--b-space-6)`    |

### 2. Grid & States

| Class                 | Behavior                                                                      |
|:----------------------|:------------------------------------------------------------------------------|
| `.b-table--striped`   | Applies a background color to even rows inside `.b-table__tbody`.             |
| `.b-table--hover`     | Adds a background color transition when hovering over `<tr>` elements.        |
| `.b-table--gridlines` | Forces `border: 1px solid` on all `<th/>` and `<td/>` cells.                  |
| `.b-table--loading`   | Applies `pointer-events: none` to the root container to disable interactions. |

### 3. Sorting & Filtering

| Class                                  | Description                                                                        |
|:---------------------------------------|:-----------------------------------------------------------------------------------|
| `.b-table__th--sortable`               | Applied to sortable column headers. Adds hover states and cursor pointers.         |
| `.b-table__sort-icon--active`          | Highlights the currently active sort direction icon.                               |
| `.b-table__tr--filter`                 | Row modifier for `filterDisplay="row"`. Styles the background to match the header. |
| `.b-table__filter-menu-button--active` | Highlights the filter funnel icon when the popover is open.                        |

## Public API Tokens
Override these on a specific instance for one-off customizations.

### Layout & Sizing
| Token                  | Default                     | Description                                       |
|:-----------------------|:----------------------------|:--------------------------------------------------|
| `--b-table-background` | `var(--b-surface-section)`  | Background of the root container.                 |
| `--b-table-border`     | `var(--b-border-subtle)`    | Color for row separators and gridlines.           |
| `--b-table-radius`     | `var(--b-radius-container)` | Border radius of the root container.              |
| `--b-table-th-padding` | `var(--b-space-4)`          | Header cell padding (scales with size modifiers). |
| `--b-table-td-padding` | `var(--b-space-4)`          | Body cell padding (scales with size modifiers).   |

### Header & Text
| Token                         | Default                     | Description                     |
|:------------------------------|:----------------------------|:--------------------------------|
| `--b-table-header-background` | `var(--b-surface-section)`  | Background of header rows.      |
| `--b-table-header-text`       | `var(--b-text-primary)`     | Text color for column headers.  |
| `--b-table-header-weight`     | `var(--b-font-weight-bold)` | Font weight for column headers. |

### States & Interactions
| Token                            | Default                             | Description                           |
|:---------------------------------|:------------------------------------|:--------------------------------------|
| `--b-table-row-hover-background` | `var(--b-overlay-hover)`            | Background color on row/header hover. |
| `--b-table-striped-background`   | `var(--b-surface-ground)`           | Background color for even rows.       |
| `--b-table-icon-color`           | `var(--b-text-muted)`               | Inactive color for sort/filter icons. |
| `--b-table-active-color`         | `var(--b-primary-solid-background)` | Active color for sort/filter icons.   |

### Popover (Menu Filter)
| Token                          | Default                    | Description                              |
|:-------------------------------|:---------------------------|:-----------------------------------------|
| `--b-table-popover-width`      | `15rem`                    | Minimum width of the filter dropdown.    |
| `--b-table-popover-background` | `var(--b-surface-overlay)` | Background color of the filter dropdown. |
| `--b-table-popover-shadow`     | `var(--b-shadow-lg)`       | Shadow applied to the filter dropdown.   |

## Examples & Implementation

### Basic Structure
The essential HTML setup with one sortable column.

<div class="card">
    <div class="b-table">
        <div class="b-table__wrapper">
            <table class="b-table__el" role="table">
                <thead class="b-table__thead">
                    <tr class="b-table__tr">
                        <th class="b-table__th b-table__th--sortable" role="columnheader" tabindex="0">
                            <div class="b-table__th-content">
                                <div class="b-table__header-label">Code</div>
                                <div class="b-table__sort-icon-group" aria-hidden="true">
                                    <svg class="b-table__sort-icon b-table__sort-icon--up" viewBox="0 0 24 12"><path d="M12 2l10 10H2L12 2z"/></svg>
                                    <svg class="b-table__sort-icon b-table__sort-icon--down b-table__sort-icon--active" viewBox="0 0 24 12"><path d="M12 10L2 0h20L12 10z"/></svg>
                                </div>
                            </div>
                        </th>
                        <th class="b-table__th" role="columnheader">
                            <div class="b-table__th-content">
                                <div class="b-table__header-label">Name</div>
                            </div>
                        </th>
                        <th class="b-table__th" role="columnheader">
                            <div class="b-table__th-content">
                                <div class="b-table__header-label">Category</div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody class="b-table__tbody">
                    <tr class="b-table__tr">
                        <td class="b-table__td">f230fh0g3</td>
                        <td class="b-table__td">Bamboo Watch</td>
                        <td class="b-table__td">Accessories</td>
                    </tr>
                    <tr class="b-table__tr">
                        <td class="b-table__td">nvklal433</td>
                        <td class="b-table__td">Black Watch</td>
                        <td class="b-table__td">Accessories</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

```html
<div class="b-table">
    <div class="b-table__wrapper">
        <table class="b-table__el" role="table">
            <thead class="b-table__thead">
                <tr class="b-table__tr">
                    
                    <!-- Sortable Header -->
                    <th class="b-table__th b-table__th--sortable" tabindex="0">
                        <div class="b-table__th-content">
                            <div class="b-table__header-label">Code</div>
                            <div class="b-table__sort-icon-group">
                                <!-- Up/Down SVGs go here -->
                            </div>
                        </div>
                    </th>
                    
                    <!-- Static Header -->
                    <th class="b-table__th">
                        <div class="b-table__th-content">
                            <div class="b-table__header-label">Name</div>
                        </div>
                    </th>
                    
                </tr>
            </thead>
            <tbody class="b-table__tbody">
                <!-- Data Rows -->
            </tbody>
        </table>
    </div>
</div>
```

### Gridlines & Striped Rows
Apply `.b-table--striped`, `.b-table--hover`, and `.b-table--gridlines` to the root container.

<div class="card">
    <div class="b-table b-table--striped b-table--hover b-table--gridlines">
        <div class="b-table__wrapper">
            <table class="b-table__el" role="table">
                <thead class="b-table__thead">
                    <tr class="b-table__tr">
                        <th class="b-table__th"><div class="b-table__th-content">Code</div></th>
                        <th class="b-table__th"><div class="b-table__th-content">Name</div></th>
                    </tr>
                </thead>
                <tbody class="b-table__tbody">
                    <tr class="b-table__tr"><td class="b-table__td">1001</td><td class="b-table__td">Item A</td></tr>
                    <tr class="b-table__tr"><td class="b-table__td">1002</td><td class="b-table__td">Item B</td></tr>
                    <tr class="b-table__tr"><td class="b-table__td">1003</td><td class="b-table__td">Item C</td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

```html
<div class="b-table b-table--striped b-table--hover b-table--gridlines">
    <div class="b-table__wrapper">
        <table class="b-table__el" role="table">
            <thead class="b-table__thead">
            <tr class="b-table__tr">
                <th class="b-table__th"><div class="b-table__th-content">Code</div></th>
                <th class="b-table__th"><div class="b-table__th-content">Name</div></th>
            </tr>
            </thead>
            <tbody class="b-table__tbody">
            <tr class="b-table__tr"><td class="b-table__td">1001</td><td class="b-table__td">Item A</td></tr>
            <tr class="b-table__tr"><td class="b-table__td">1002</td><td class="b-table__td">Item B</td></tr>
            <tr class="b-table__tr"><td class="b-table__td">1003</td><td class="b-table__td">Item C</td></tr>
            </tbody>
        </table>
    </div>
</div>
```

### Loading State
Applying `.b-table--loading` blocks pointer events. The loading mask covers the entire container.

<div class="card">
    <div class="b-table b-table--loading" style="min-height: 150px;">
        <div class="b-table__wrapper">
            <table class="b-table__el" role="table">
                <thead class="b-table__thead">
                    <tr class="b-table__tr">
                        <th class="b-table__th"><div class="b-table__th-content">Code</div></th>
                        <th class="b-table__th"><div class="b-table__th-content">Name</div></th>
                    </tr>
                </thead>
                <tbody class="b-table__tbody">
                    <tr class="b-table__tr"><td class="b-table__td">1001</td><td class="b-table__td">Item A</td></tr>
                    <tr class="b-table__tr"><td class="b-table__td">1002</td><td class="b-table__td">Item B</td></tr>
                    <tr class="b-table__tr"><td class="b-table__td">1003</td><td class="b-table__td">Item C</td></tr>
                </tbody>
            </table>
        </div>
        <div class="b-table__loading-overlay">
            <div class="b-table__loading-spinner"></div>
        </div>
    </div>
</div>

```html
<div class="b-table b-table--loading" style="min-height: 150px;">
    <div class="b-table__wrapper">
        <table class="b-table__el" role="table">
            <thead class="b-table__thead">
            <tr class="b-table__tr">
                <th class="b-table__th"><div class="b-table__th-content">Code</div></th>
                <th class="b-table__th"><div class="b-table__th-content">Name</div></th>
            </tr>
            </thead>
            <tbody class="b-table__tbody">
            <tr class="b-table__tr"><td class="b-table__td">1001</td><td class="b-table__td">Item A</td></tr>
            <tr class="b-table__tr"><td class="b-table__td">1002</td><td class="b-table__td">Item B</td></tr>
            <tr class="b-table__tr"><td class="b-table__td">1003</td><td class="b-table__td">Item C</td></tr>
            </tbody>
        </table>
    </div>
    <div class="b-table__loading-overlay">
        <div class="b-table__loading-spinner"></div>
    </div>
</div>
```