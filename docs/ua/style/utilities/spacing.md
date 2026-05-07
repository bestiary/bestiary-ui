# Spacing <VersionBadge module="style" />
Spacing utilities allow you to control the padding and margin of an element. These classes map directly to the [Spatial Scale](../tokens/layout#the-spatial-scale) (1 step = 4px).

## Logical Properties Note
Bestiary UI uses **CSS Logical Properties** (e.g., `margin-inline-start` instead of `margin-left`). This ensures that your layout automatically adapts to different writing directions like RTL (Right-to-Left) without any extra code.

## Padding
Control the inner white space of an element.

| Class    | Properties                           |
|:---------|:-------------------------------------|
| `p-{n}`  | `padding`                            |
| `px-{n}` | `padding-inline` (Left & Right)      |
| `py-{n}` | `padding-block` (Top & Bottom)       |
| `pt-{n}` | `padding-block-start` (Top)          |
| `pb-{n}` | `padding-block-end` (Bottom)         |
| `pl-{n}` | `padding-inline-start` (Left in LTR) |
| `pr-{n}` | `padding-inline-end` (Right in LTR)  |

## Margin
Control the outer space between elements.

| Class    | Properties                          |
|:---------|:------------------------------------|
| `m-{n}`  | `margin`                            |
| `mx-{n}` | `margin-inline` (Left & Right)      |
| `my-{n}` | `margin-top` (Top & Bottom)         |
| `mt-{n}` | `margin-block-start` (Top)          |
| `mb-{n}` | `margin-block-end` (Bottom)         |
| `ml-{n}` | `margin-inline-start` (Left in LTR) |
| `mr-{n}` | `margin-inline-end` (Right in LTR)  |

### Special Values
- **Auto**: `m-auto`, `mx-auto`, `my-auto`, `mt-auto`, etc., are available for automatic centering or pushing elements.
- **Negative Margin**: Use the `-n` prefix (e.g., `m-n4`, `mt-n2`) to apply negative offsets. Supports steps `1` through `12`.

## Space Between
These utilities allow you to control the space between child elements. Perfect for stacks and rows without using `gap`.

| Class         | Description                             |
|:--------------|:----------------------------------------|
| `space-x-{n}` | Adds horizontal space between children. |
| `space-y-{n}` | Adds vertical space between children.   |

```html
<div class="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div> <!-- 16px top margin added here -->
  <div>Item 3</div> <!-- 16px top margin added here -->
</div>
```

## The Scale Reference
Replace `{n}` in the classes above with any step from the spatial scale. All utilities use `!important` to ensure they act as reliable overrides.

| Step   | Rem       | Pixels |
|:-------|:----------|:-------|
| `0`    | `0`       | 0px    |
| `1`    | `0.25rem` | 4px    |
| `2`    | `0.5rem`  | 8px    |
| `3`    | `0.75rem` | 12px   |
| `4`    | `1rem`    | 16px   |
| `5`    | `1.25rem` | 20px   |
| `6`    | `1.5rem`  | 24px   |
| `7`    | `1.75rem` | 28px   |
| `8`    | `2rem`    | 32px   |
| `9`    | `2.25rem` | 36px   |
| `10`   | `2.5rem`  | 40px   |
| `11`   | `2.75rem` | 44px   |
| `12`   | `3rem`    | 48px   |

```html
<div class="p-4 m-auto mt-6">
  <!-- Padding: 16px, Margin: auto, Margin-Top: 24px -->
</div>
```