# CSS Layers <VersionBadge module="style" />
**Bestiary UI Style** uses the modern CSS `@layer` at-rule to explicitly manage the cascade. This ensures that styles are applied in a predictable order, preventing specificity wars and making it easy to override library styles with your own.

## The Layer Orchestration
All styles in the library are organized into four orchestrated layers. They are declared in the following order (from lowest to highest priority):

1.  `b-tokens` (Lowest priority)
2.  `b-reset`
3.  `b-components`
4.  `b-utilities` (Highest priority)

```css
/* Internal library orchestration */
@layer b-tokens, b-reset, b-components, b-utilities;
```

## Detailed Breakdown

### 1. `b-tokens`
Contains CSS Houdini `@property` registrations and raw design token values. It has the lowest priority because tokens are meant to be consumed, not to provide visual styles themselves.

### 2. `b-reset`
Responsible for normalizing browser defaults. It includes base styles for HTML tags (`body`, `h1-h6`, `input`, etc.). Placing this in a layer ensures that your custom styles can easily override base tag styling without increasing selector complexity.

### 3. `b-components`
This is where the logic for complex elements resides (e.g., `.b-btn`, `.b-card`). Styles here are encapsulated and rely on tokens. Since they are in a layer, they won't accidentally interfere with your application's top-level CSS.

### 4. `b-utilities`
Contains atomic classes for rapid styling (e.g., `.flex`, `.p-4`). This layer has the **highest priority** within the library to ensure that a utility class always wins over a component's internal style.

## Interacting with Layers

### Overriding Library Styles
If you want to ensure your custom CSS always takes precedence over the library, you can place your styles in a layer declared **after** the library's layers, or simply write them in the "unlayered" space (which always has the highest priority).

```css
/* Your custom CSS file */
@layer my-app-styles {
  .b-btn {
    /* This will win because my-app-styles is declared after b-components */
    background: purple; 
  }
}
```

### Visualizing the Cascade
In modern browser DevTools (Chrome, Firefox, Safari), you can see the `@layer` group in the "Styles" pane. This allows you to inspect which layer a specific rule belongs to and why it is being applied or overridden.

::: info Browser Support
CSS Layers are supported in all modern evergreen browsers (since 2022).
:::