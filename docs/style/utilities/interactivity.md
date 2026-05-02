# Interactivity <VersionBadge module="style" />

## Cursor
Cursor utilities control the mouse cursor's appearance when hovering over an element. They help communicate the intended action or the current state of an interactive component.

### Standard & Feedback
Common cursors for basic interactions and state signaling.

| Class                | CSS Property          | Typical Usage                                          |
|:---------------------|:----------------------|:-------------------------------------------------------|
| `cursor-pointer`     | `cursor: pointer`     | Clickable elements like links or custom buttons.       |
| `cursor-default`     | `cursor: default`     | Standard arrow (reset for interactive containers).     |
| `cursor-not-allowed` | `cursor: not-allowed` | **Disabled state**: signals that an action is blocked. |
| `cursor-wait`        | `cursor: wait`        | System is busy (blocking interaction).                 |
| `cursor-progress`    | `cursor: progress`    | Work in progress (interaction still possible).         |

### Drag & Drop
Specific cursors for elements that can be moved or rearranged.

| Class             | CSS Property       | Intent                              |
|:------------------|:-------------------|:------------------------------------|
| `cursor-grab`     | `cursor: grab`     | Indicates an item can be picked up. |
| `cursor-grabbing` | `cursor: grabbing` | Active dragging state.              |

### Advanced
| Class         | CSS Property   | Description                        |
|:--------------|:---------------|:-----------------------------------|
| `cursor-none` | `cursor: none` | Completely hides the mouse cursor. |

### Practical Examples

**1. Custom File Upload Zone**
```html
<div class="p-8 border-dashed border-2 cursor-pointer flex flex-col items-center">
  <span>Click to upload</span>
</div>
```

**2. Draggable List Items**
```html
<div class="flex gap-2 items-center p-2 surface-section cursor-grab active:cursor-grabbing">
  <svg class="size-4">...</svg> <!-- Drag handle icon -->
  <span>Item Title</span>
</div>
```

**3. Blocked Action**
```html
<button class="b-btn opacity-50 cursor-not-allowed">
  Submit (Paywall)
</button>
```

## Core Interactivity
Core interactivity utilities handle how elements respond to user input device events (mouse, touch) and how the browser allows users to manipulate the content of an element.

### Pointer Events
Controls whether an element can be the target of pointer events (clicks, taps, hovers).

| Class                 | CSS Property | Typical Usage                                                                                                                                              |
|:----------------------|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `pointer-events-none` | `none`       | **"Click-through"**: Makes the element invisible to mouse/touch events. Useful for decorative icons or overlays that shouldn't block content beneath them. |
| `pointer-events-auto` | `auto`       | Restores default behavior. Useful for enabling clicks on specific children of a non-interactive parent.                                                    |

### User Select
Controls whether the user can highlight and copy text within an element.

| Class         | CSS Property        | Description                                                                                                                                 |
|:--------------|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| `select-none` | `user-select: none` | **Non-selectable**: Prevents text highlighting. Recommended for UI labels, icons, and buttons to make them feel like native app components. |
| `select-text` | `user-select: text` | Normal text selection (Default).                                                                                                            |
| `select-all`  | `user-select: all`  | **One-click select**: Clicking once selects the entire content. Perfect for API keys, coupon codes, or code snippets.                       |

### Touch Action (Mobile UX)
Optimizes how elements respond to touch-screen gestures.

| Class                | CSS Property   | Intent                                                                                                        |
|:---------------------|:---------------|:--------------------------------------------------------------------------------------------------------------|
| `touch-auto`         | `auto`         | Standard browser handling for panning and zooming.                                                            |
| `touch-manipulation` | `manipulation` | **Snappier clicks**: Disables "double-tap to zoom," removing the 300ms click delay on mobile browsers.        |
| `touch-none`         | `none`         | Disables all browser touch interactions. Mandatory for implementing custom drag-and-drop or drawing canvases. |

### Practical Examples

**1. Overlay with "Click-Through" Background**
```html
<div class="fixed inset-0 pointer-events-none">
  <!-- This floating badge is visible but you can click links BEHIND it -->
  <div class="absolute bottom-4 right-4 pointer-events-auto b-btn">
    Need help?
  </div>
</div>
```

**2. Copy-Friendly API Key Block**
```html
<div class="surface-section p-4 radius-md">
  <span class="text-secondary select-none">API Key:</span>
  <code class="select-all font-mono ml-2">sk_test_4eC39HqLyjWDarjtT1zdp7dc</code>
</div>
```

**3. Interactive Canvas/Map**
```html
<div class="inline-full block-64 touch-none surface-ground">
  <!-- Custom JS will handle pan/zoom here without browser interference -->
</div>
```

## Motion (Transitions & Animation)
Motion utilities control the timing, easing, and keyframe animations of elements. These classes make state changes feel organic and provide visual cues for loading, notifications, and interactions.

### 1. Transition Presets
The standard `transition` class is a "smart" default that covers almost all animatable properties without the performance cost of `all`.

| Class             | Properties Targeted                                          | Timing & Duration |
|:------------------|:-------------------------------------------------------------|:------------------|
| `transition`      | color, bg, border, opacity, shadow, transform, filters, etc. | `base` / `normal` |
| `transition-all`  | **all** properties                                           | —                 |
| `transition-none` | **none** (removes transitions)                               | —                 |

::: info Entry/Exit Animations
The `transition` class includes `transition-behavior: allow-discrete`. This allows you to animate elements transitioning from `display: none` to `display: block` using the `@starting-style` logic in modern browsers.
:::

### 2. Duration & Easing
Fine-tune the speed and velocity curve of your transitions using semantic roles.

#### Durations
Standardized speeds based on the [Behavior Tokens](../tokens/behavior#durations-time).

| Class             | Token                 | Intent                                         |
|:------------------|:----------------------|:-----------------------------------------------|
| `duration-fast`   | `--b-duration-fast`   | Snappy feedback, hover effects (100ms).        |
| `duration-normal` | `--b-duration-normal` | Standard UI transitions (200ms).               |
| `duration-slow`   | `--b-duration-slow`   | Complex layout shifts or large modals (300ms). |

#### Easing Curves
Control the acceleration of the movement.

| Class         | Token             | Characteristics                                  |
|:--------------|:------------------|:-------------------------------------------------|
| `ease-base`   | `--b-ease-base`   | Smooth and balanced for most tasks.              |
| `ease-in`     | `--b-ease-in`     | Accelerating (Best for leaving the screen).      |
| `ease-out`    | `--b-ease-out`    | Decelerating (Best for entering the screen).     |
| `ease-accent` | `--b-ease-accent` | Snappy, spring-like feel for emphasized actions. |

### 3. Keyframe Animations
Built-in infinite animations for status indicators and loading states.

| Class            | Animation              | Typical Usage                              |
|:-----------------|:-----------------------|:-------------------------------------------|
| `animate-spin`   | 360° Rotation          | Loading icons and progress circles.        |
| `animate-pulse`  | Gentle opacity fade    | Skeleton loaders and ghost elements.       |
| `animate-ping`   | Scaling "radar" effect | Attention-grabbing badges or active calls. |
| `animate-bounce` | Vertical jumping       | Scroll indicators or playful icons.        |

### 4. Accessibility: Reduced Motion
Bestiary UI puts user comfort first. If a user has **"Reduce Motion"** enabled in their OS settings, the library automatically:
- Disables all keyframe animations.
- Sets transition durations to near-zero (0.01ms).
- Switches scroll behavior to `auto`.

This ensures your site remains fully usable for people with motion sensitivities without any extra effort on your part.

### Practical Example: Animated Button & Loader

```html
<!-- Button with smooth color/transform transition -->
<button class="b-btn transition hover:scale-105 active:scale-95">
  Click Me
</button>

<!-- Loading Spinner -->
<svg class="animate-spin size-6 text-primary">...</svg>

<!-- Notification Badge with Ping effect -->
<div class="relative">
  <span>Messages</span>
  <span class="absolute top-0 right-0 animate-ping size-2 radius-full bg-error"></span>
</div>
```

## Scroll Behavior
Scroll utilities control how users navigate through overflow content. They manage scroll smoothness, snapping points for sliders, and offsets for anchor links.

### 1. Scroll Smoothness
Determines if the browser should animate the transition when a scroll is triggered (e.g., by clicking an anchor link).

| Class           | CSS Property              | Description                   |
|:----------------|:--------------------------|:------------------------------|
| `scroll-auto`   | `scroll-behavior: auto`   | Immediate jump to the target. |
| `scroll-smooth` | `scroll-behavior: smooth` | Smoothly animated scroll.     |

::: info Accessibility
Bestiary UI automatically disables `scroll-smooth` if the user has enabled the **"Reduce Motion"** preference in their operating system, ensuring a comfortable experience for everyone.
:::

### 2. Scroll Snap (Container)
Use these classes on a scrollable container to define how child elements should "lock" into place.

| Class       | Type   | Axis                            |
|:------------|:-------|:--------------------------------|
| `snap-none` | `none` | Disable snapping.               |
| `snap-x`    | `x`    | Snap along the horizontal axis. |
| `snap-y`    | `y`    | Snap along the vertical axis.   |
| `snap-both` | `both` | Snap along both axes.           |

#### Strictness Modifiers
Combine these with the classes above to control how aggressively the browser snaps.

| Class            | Modifier    | Description                                                                    |
|:-----------------|:------------|:-------------------------------------------------------------------------------|
| `snap-mandatory` | `mandatory` | The container **always** snaps to a point when the user stops scrolling.       |
| `snap-proximity` | `proximity` | The container snaps **only if** the scroll is close to a snap point (Default). |

```html
<!-- Example: A mandatory horizontal slider -->
<div class="flex overflow-x-auto snap-x snap-mandatory">
  ...
</div>
```

### 3. Scroll Snap (Children)
Applied to elements inside a snap container to define their alignment point.

| Class         | Alignment      | Description                                                               |
|:--------------|:---------------|:--------------------------------------------------------------------------|
| `snap-start`  | `start`        | Align to the start of the container.                                      |
| `snap-center` | `center`       | Align to the center.                                                      |
| `snap-end`    | `end`          | Align to the end.                                                         |
| `snap-always` | `stop: always` | Forces the scroll to stop on this element, even if the user scrolls fast. |

### 4. Scroll Offsets
Used to set the offset between the element and the edge of the scroll container. This is crucial for **anchor links** when you have a sticky header that would otherwise cover the target content.

| Class         | Token         | Description              |
|:--------------|:--------------|:-------------------------|
| `scroll-mt-0` | `0`           | No top offset.           |
| `scroll-mt-4` | `--b-space-4` | 16px top offset.         |
| `scroll-mt-8` | `--b-space-8` | 32px top offset.         |
| `scroll-pt-4` | `--b-space-4` | 16px top padding offset. |

### Practical Examples

**1. Horizontal Carousel**
```html
<div class="flex gap-4 overflow-x-auto snap-x snap-mandatory p-4">
  <div class="flex-none inline-xs aspect-video snap-center surface-section">Card 1</div>
  <div class="flex-none inline-xs aspect-video snap-center surface-section">Card 2</div>
  <div class="flex-none inline-xs aspect-video snap-center surface-section">Card 3</div>
</div>
```

**2. Fixing Anchor Links (Sticky Header)**
If your site has a 64px sticky header, use `scroll-mt-` to ensure the heading isn't hidden behind it.

```html
<!-- When clicking a link to this ID, it will stop 32px before the element -->
<h2 id="features" class="scroll-mt-8">
  Our Features
</h2>
```

## Transforms
Transform utilities allow you to change the shape, size, and orientation of elements. These classes are hardware-accelerated and highly performant for animations.

### Transform Origin (Pivot Points)
Determines the anchor point around which an element rotates or scales.

| Class           | CSS Property | Description                                 |
|:----------------|:-------------|:--------------------------------------------|
| `origin-center` | `center`     | Transform relative to the center (Default). |
| `origin-top`    | `top`        | Transform from the top edge.                |
| `origin-bottom` | `bottom`     | Transform from the bottom edge.             |
| `origin-left`   | `left`       | Transform from the left edge.               |
| `origin-right`  | `right`      | Transform from the right edge.              |

### Rotation
Essential for UI state indicators like arrows in accordions or dropdowns.

| Class        | Rotation Angle | Use Case                           |
|:-------------|:---------------|:-----------------------------------|
| `rotate-0`   | `0deg`         | Reset rotation.                    |
| `rotate-90`  | `90deg`        | Point arrow to the right (in LTR). |
| `rotate-180` | `180deg`       | Flip element upside down.          |
| `rotate-270` | `270deg`       | Point arrow to the left.           |
| `rotate-n90` | `-90deg`       | Point arrow upwards.               |

### Scale & Flipping
Utilities for mirroring elements or creating "pop-in" visibility animations.

#### Mirroring (Flipping)
| Class    | Action              | Typical Usage                          |
|:---------|:--------------------|:---------------------------------------|
| `flip-x` | Mirror horizontally | Flipping directional icons or avatars. |
| `flip-y` | Mirror vertically   | Reflection effects or inverted icons.  |

#### Visibility Scale
| Class       | Value | Description                                |
|:------------|:------|:-------------------------------------------|
| `scale-0`   | `0`   | Completely shrink the element (invisible). |
| `scale-100` | `1`   | Reset to natural size (100%).              |

### Performance & Resets

#### GPU Acceleration
- **Class**: `transform-gpu`
- **Logic**: Applies `translateZ(0)`.
- **Why use it?**: Forces the browser to handle the element on the GPU (graphics card) rather than the CPU. Use this for complex transitions to ensure silky-smooth 60fps animations and prevent text "jittering" during movement.

#### Reset
- **Class**: `transform-none`
- **Effect**: Resets `transform`, `rotate`, `scale`, and `translate` to their default values.

### Practical Examples

**1. Accordion Arrow Animation**
```html
<button class="flex items-center gap-2">
  <span>Toggle Details</span>
  <!-- Arrow rotates 180 degrees when parent has .is-open -->
  <svg class="size-4 transition rotate-0 [.is-open_&]:rotate-180">...</svg>
</button>
```

**2. Hover Scale Effect**
```html
<div class="surface-section p-4 transition hover:scale-105 transform-gpu">
  <p>I feel snappy and smooth thanks to GPU acceleration.</p>
</div>
```

**3. "Pop-in" Menu**
```html
<!-- Starts small and grows to full size -->
<div class="fixed top-1-2 left-1-2 origin-center scale-0 transition duration-slow">
  Modal Content
</div>
```

## Translate
Translate utilities allow you to offset an element's position along the X and Y axes. These classes are primarily used for absolute centering, toggle states (like off-canvas menus), and subtle micro-interactions.

### 1. Centering & Fractions
These utilities are the "missing link" for absolute positioning. Use them in combination with [Inset](./layout#inset) utilities to achieve perfect centering.

| Class              | CSS Value   | Typical Usage                                            |
|:-------------------|:------------|:---------------------------------------------------------|
| `translate-center` | `-50% -50%` | **The Master Center**: Combined with `top-1-2 left-1-2`. |
| `translate-x-1-2`  | `50% 0`     | Shift right by half of the element's width.              |
| `translate-x-n1-2` | `-50% 0`    | Shift left by half of the element's width.               |
| `translate-y-1-2`  | `0 50%`     | Shift down by half of the element's height.              |
| `translate-y-n1-2` | `0 -50%`    | Shift up by half of the element's height.                |

### 2. Full Shifts (100%)
Essential for "off-canvas" components like mobile sidebars, slide-out panels, or image sliders.

| Class               | CSS Value | Intent                                |
|:--------------------|:----------|:--------------------------------------|
| `translate-x-full`  | `100% 0`  | Push element completely to the right. |
| `translate-x-nfull` | `-100% 0` | Push element completely to the left.  |
| `translate-y-full`  | `0 100%`  | Push element completely downwards.    |
| `translate-y-nfull` | `0 -100%` | Push element completely upwards.      |

### 3. Precision Nudges (Pixel-based)
Used for micro-adjustments or "lifting" effects during active states.

| Class             | Value  |
|:------------------|:-------|
| `translate-x-px`  | `1px`  |
| `translate-x-npx` | `-1px` |
| `translate-y-px`  | `1px`  |
| `translate-y-npx` | `-1px` |

### Practical Examples
**1. Absolute Centering Pattern**
The most robust way to center a dynamic element (like a modal or a loader) in the middle of its container.

```html
<div class="relative size-64 surface-ground">
  <!-- top-1-2 left-1-2 puts the corner in the center, 
       translate-center pulls the element back to its own center -->
  <div class="absolute top-1-2 left-1-2 translate-center size-12 bg-primary">
    Centered
  </div>
</div>
```

**2. Off-canvas Sidebar**
Creating a panel that slides in from the left.

```html
<!-- Hidden by default with translate-x-nfull -->
<aside class="fixed top-0 left-0 block-screen inline-xs translate-x-nfull transition duration-normal [.is-open_&]:translate-0 surface-floating">
  Sidebar Content
</aside>
```

**3. Interactive Nudge**
A subtle "press down" effect for a button.

```html
<button class="b-btn transition active:translate-y-px">
  Click Me
</button>
```

## Usage Philosophy
Interactivity utilities are designed to provide immediate feedback.
- Use **Motion** utilities to make state changes (like hover or focus) feel organic.
- Use **Transforms** for decorative effects or performance-critical animations (as they don't trigger layout recalculations).
- Always ensure that **Cursor** and **User Select** settings don't negatively impact accessibility.