# Behavior <VersionBadge module="style" />
Behavior tokens define the rhythm and feel of the interface. They manage transition durations and the velocity curves (easing) of animations, enabling everything from subtle fades to complex physical simulations.

## Durations (Time)
Standardized time intervals for all interactive transitions.

| Token           | Value    |
|:----------------|:---------|
| `--b-time-50`   | `50ms`   |
| `--b-time-75`   | `75ms`   |
| `--b-time-100`  | `100ms`  |
| `--b-time-150`  | `150ms`  |
| `--b-time-200`  | `200ms`  |
| `--b-time-300`  | `300ms`  |
| `--b-time-400`  | `400ms`  |
| `--b-time-500`  | `500ms`  |
| `--b-time-700`  | `700ms`  |
| `--b-time-1000` | `1000ms` |


## Easing Curves
Bestiary UI provides a comprehensive library of easing functions. From standard mathematical curves to complex physical simulations using the modern `linear()` function.

## Intensity Scale (1-5)
Most easing groups follow a 5-step intensity scale:
- **Level 1**: Subtle, near-linear, fast-feeling.
- **Level 3**: Balanced, natural motion.
- **Level 5**: Exaggerated, high-tension, or high-impact.

## Universal Curves
Standard `cubic-bezier` curves for general-purpose animations.

| Group      | Token                   | Behavior                                                                            |
|:-----------|:------------------------|:------------------------------------------------------------------------------------|
| **Base**   | `--b-ease-[1-5]`        | Smooth, versatile curves for any UI transition.                                     |
| **In**     | `--b-ease-in-[1-5]`     | Accelerating from zero velocity. Use for elements **entering** the view.            |
| **Out**    | `--b-ease-out-[1-5]`    | Decelerating to zero velocity. Use for elements **leaving** the view.               |
| **In-Out** | `--b-ease-in-out-[1-5]` | Smooth acceleration and deceleration. Best for moving elements **within** the view. |

## The Physics Engine (`linear()`)
These curves use the cutting-edge `linear()` function to simulate real-world physical properties that are impossible to achieve with standard Beziers.

### Spring
Simulates a physical spring with overshoot and settling.
- **Tokens**: `--b-ease-spring-[1-5]`
- **Usage**: High-quality entrance animations for modals, popovers, or "snappy" list items. Level 5 has the most "vibration" before settling.

### Bounce
Simulates an object hitting a surface and rebounding.
- **Tokens**: `--b-ease-bounce-[1-5]`
- **Usage**: Playful interactions, "dropping" elements into place, or creative loading states.

## Elastic (Overshoot)
Bezier-based elastic curves that "overshoot" their destination and pull back.

| Variant            | Tokens                          | Intent                                    |
|:-------------------|:--------------------------------|:------------------------------------------|
| **Elastic Out**    | `--b-ease-elastic-out-[1-5]`    | Snappy arrival with an overshoot effect.  |
| **Elastic In**     | `--b-ease-elastic-in-[1-5]`     | Antizipation before leaving the scene.    |
| **Elastic In-Out** | `--b-ease-elastic-in-out-[1-5]` | Playful movement with peaks at both ends. |

## Mathematical Standards
Classic easing functions used in professional motion design, categorized by their mathematical power.

| Family    | Tokens (`-in`, `-out`, `-in-out`) | Characteristic                         |
|:----------|:----------------------------------|:---------------------------------------|
| **Sine**  | `--b-ease-sine-*`                 | Very gentle, near-linear.              |
| **Quad**  | `--b-ease-quad-*`                 | Natural, low-power acceleration.       |
| **Cubic** | `--b-ease-cubic-*`                | The standard "smooth" feel.            |
| **Quart** | `--b-ease-quart-*`                | High acceleration/deceleration.        |
| **Quint** | `--b-ease-quint-*`                | Very fast start/end.                   |
| **Expo**  | `--b-ease-expo-*`                 | Extremely sharp, "flashy" transitions. |
| **Circ**  | `--b-ease-circ-*`                 | Circular, abrupt start or stop.        |

## Discrete Steps
For non-continuous animations (like "ticking" or frame-by-frame motion).

| Token             | Steps    | Usage                                         |
|:------------------|:---------|:----------------------------------------------|
| `--b-ease-step-1` | 2 steps  | Binary on/off states.                         |
| `--b-ease-step-3` | 4 steps  | Simple loaders.                               |
| `--b-ease-step-5` | 10 steps | Complex "sprite-sheet" or ticking animations. |

## Usage Guide

To apply an easing curve, combine it with a [Duration](./behavior#durations-time) token:

```css
.my-card {
  transition-property: transform;
  transition-duration: var(--b-time-300);
  
  /* Use a spring for an organic feel */
  transition-timing-function: var(--b-ease-spring-2);
}

.my-card:active {
  /* Use a snappy curve for immediate feedback */
  transition-duration: var(--b-time-100);
  transition-timing-function: var(--b-ease-out-5);
  transform: scale(0.95);
}
```