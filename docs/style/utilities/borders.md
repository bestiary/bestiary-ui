# Borders <VersionBadge module="style" />
Border utilities provide classes for adding individual borders, creating dividers between elements, and defining essential shapes like circles and pills.

## Border Width (Individual Sides)
Utilities to add a border to a specific side of an element. These classes use the system's [Default Stroke](../tokens/borders#stroke-weights) token.

| Class         | CSS Property          | Token                |
|:--------------|:----------------------|:---------------------|
| `border-t`    | `border-top-width`    | `--b-stroke-default` |
| `border-b`    | `border-bottom-width` | `--b-stroke-default` |
| `border-l`    | `border-left-width`   | `--b-stroke-default` |
| `border-r`    | `border-right-width`  | `--b-stroke-default` |
| `border-none` | `border-width: 0`     | —                    |

## Dividers (Between Items)
Dividers add a border between child elements in a container. They are perfect for lists, navigation bars, or segmented controls. Bestiary UI uses **Logical Properties** to ensure dividers respond correctly to LTR/RTL layouts.

| Class              | Axis       | Direction                            |
|:-------------------|:-----------|:-------------------------------------|
| `divide-x`         | Horizontal | Between inline elements.             |
| `divide-x-reverse` | Horizontal | Reversed logic for specific layouts. |
| `divide-y`         | Vertical   | Between stacked elements.            |
| `divide-y-reverse` | Vertical   | Reversed logic for vertical stacks.  |

```html
<!-- Example: A navigation list with vertical dividers -->
<ul class="flex items-center divide-x border-default">
  <li class="px-4">Home</li>
  <li class="px-4">Services</li>
  <li class="px-4">Contact</li>
</ul>
```

## Essential Shapes
Quickly transform the corners of an element. For more complex scales, refer to the [Borders Tokens](../tokens/borders) section.

| Class          | CSS Property       | Token                      |
|:---------------|:-------------------|:---------------------------|
| `rounded-full` | `border-radius`    | `--b-radius-full` (9999px) |
| `rounded-none` | `border-radius: 0` | —                          |

## Practical Examples

**1. Content Section with Bottom Border**
```html
<section class="border-b border-subtle pb-8 mb-8">
  <h2 class="text-2xl font-bold">Section Title</h2>
</section>
```

**2. Circle Avatar**
```html
<img 
  src="/user.jpg" 
  class="size-12 rounded-full object-cover border-md border-primary"
>
```

**3. Vertical Menu with Dividers**
```html
<nav class="flex flex-col divide-y surface-section radius-md border-sm">
  <a href="#" class="p-3">Profile</a>
  <a href="#" class="p-3">Settings</a>
  <a href="#" class="p-3">Logout</a>
</nav>
```

::: tip Logic & RTL
The `divide-x` and `divide-x-reverse` utilities use `border-inline-start/end` logic, meaning they will automatically mirror if your document direction is set to `rtl`.
:::