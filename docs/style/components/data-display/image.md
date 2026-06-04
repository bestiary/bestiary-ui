# Image Style API <VersionBadge module="style" />
The Image component provides a standardized container for displaying visual media, complete with border-radius management, hover preview indicators, and a fully styled fullscreen lightbox (teleported portal).

## Anatomy
The architecture is divided into two distinct parts: the inline container and the fullscreen teleported mask.

### Inline Image

| Class                            | Role          | Description                                                                    |
|:---------------------------------|:--------------|:-------------------------------------------------------------------------------|
| `.b-image`                       | **Container** | The root inline wrapper. Manages aspect ratio, overflow, and border radius.    |
| `.b-image__el`                   | **Element**   | The internal `<img>` tag. Uses `object-fit: cover` and inherits border radius. |
| `.b-image__preview-indicator`    | **Overlay**   | An absolute overlay that fades in on hover (`opacity: 1`).                     |
| `.b-image__preview-icon`         | **Element**   | Sizing wrapper for the indicator's SVG icon.                                   |

### Fullscreen Preview (Lightbox)
Normally teleported to the `<body>` to escape stacking contexts.

| Class                          | Role          | Description                                                                       |
|:-------------------------------|:--------------|:----------------------------------------------------------------------------------|
| `.b-image__preview-mask`       | **Container** | Fixed overlay covering the entire viewport with a backdrop blur.                  |
| `.b-image__preview-toolbar`    | **Wrapper**   | Absolute container anchored to the top-right for action buttons.                  |
| `.b-image__preview-btn`        | **Element**   | Pill-shaped icon buttons (Zoom, Rotate, Close) inside the toolbar.                |
| `.b-image__preview-container`  | **Wrapper**   | Flex container centering the large image inside the viewport.                     |
| `.b-image__preview-img`        | **Element**   | The large `<img>` element. Uses `object-fit: contain` and applies a heavy shadow. |

## Public API Tokens
Override these on a specific instance for one-off customizations.

### Base Component Tokens
| Token                            | Default                       | Description                              |
|:---------------------------------|:------------------------------|:-----------------------------------------|
| `--b-image-border-radius`        | `var(--b-radius-container)`   | Inherited by the internal image element. |
| `--b-image-indicator-background` | `var(--b-surface-overlay)`    | Background color of the hover overlay.   |
| `--b-image-indicator-color`      | `var(--b-text-contrast)`      | Color of the hover indicator icon.       |
| `--b-image-indicator-size`       | `var(--b-size-8)`             | Dimensions of the hover indicator icon.  |

### Fullscreen Mask Tokens
| Token                            | Default                                | Description                                |
|:---------------------------------|:---------------------------------------|:-------------------------------------------|
| `--b-image-mask-background`      | `oklch(var(--b-black-channels) / 40%)` | Color and opacity of the lightbox overlay. |
| `--b-image-toolbar-background`   | `oklch(var(--b-white-channels) / 10%)` | Background of the pill-shaped toolbar.     |
| `--b-image-toolbar-hover`        | `oklch(var(--b-white-channels) / 20%)` | Hover state of toolbar buttons.            |
| `--b-image-toolbar-color`        | `oklch(var(--b-white-channels))`       | Icon color inside the toolbar.             |

## Examples & Implementation

### Basic Image
Standard image rendering mapping to the local border-radius token.

<div class="card flex justify-center">
    <div class="b-image" style="width: 300px; height: 200px;">
        <img class="b-image__el" src="https://picsum.photos/600/400?1" alt="Placeholder" />
    </div>
</div>

```html
<div class="b-image">
    <img class="b-image__el" src="/path/to/image.jpg" alt="Description" />
</div>
```

### With Preview Indicator
Adding `.b-image__preview-indicator` enables the hover overlay. The parent `.b-image` relies on `:hover` to automatically transition the indicator's opacity.

<div class="card flex justify-center">
    <div class="b-image" style="width: 300px; height: 200px;">
        <img class="b-image__el" src="https://picsum.photos/600/400?2" alt="Placeholder" />
        <div class="b-image__preview-indicator" aria-hidden="true">
            <div class="b-image__preview-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
</div>

```html
<div class="b-image">
    <img class="b-image__el" src="/path/to/image.jpg" alt="Description" />
    
    <!-- Hover Indicator -->
    <div class="b-image__preview-indicator" aria-hidden="true">
        <div class="b-image__preview-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <!-- Maximize Icon Paths -->
            </svg>
        </div>
    </div>
</div>
```

### Fullscreen Lightbox Portal (Vanilla JS Integration)
The fullscreen lightbox requires DOM manipulation to manage visibility and apply transform styles (zoom/rotate) to the image.

Below is a fully functional Vanilla JS example demonstrating how to implement the interactive preview, including the toolbar controls, without relying on a framework.

<div class="card flex justify-center">
    <!-- Trigger Image -->
    <div class="b-image" style="width: 300px; height: 200px; cursor: pointer;" onclick="document.getElementById('demo-lightbox').style.display='flex'">
        <img class="b-image__el" src="https://picsum.photos/800/600?3" alt="Placeholder" />
        <div class="b-image__preview-indicator" aria-hidden="true">
            <div class="b-image__preview-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
    <!-- Lightbox Mask (Hidden by default) -->
    <div id="demo-lightbox" class="b-image__preview-mask" role="dialog" aria-modal="true" style="display: none;" onclick="if(event.target === this || event.target.classList.contains('b-image__preview-container')) { this.style.display='none'; }">
        <div class="b-image__preview-toolbar">
            <button class="b-image__preview-btn" aria-label="Rotate Left" onclick="let img=document.getElementById('demo-img'); let r=parseFloat(img.dataset.r||0)-90; img.dataset.r=r; img.style.transform=`scale(${img.dataset.s||1}) rotate(${r}deg)`;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </button>
            <button class="b-image__preview-btn" aria-label="Rotate Right" onclick="let img=document.getElementById('demo-img'); let r=parseFloat(img.dataset.r||0)+90; img.dataset.r=r; img.style.transform=`scale(${img.dataset.s||1}) rotate(${r}deg)`;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
            </button>
            <button class="b-image__preview-btn" aria-label="Zoom Out" onclick="let img=document.getElementById('demo-img'); let s=Math.max(0.5, parseFloat(img.dataset.s||1)-0.5); img.dataset.s=s; img.style.transform=`scale(${s}) rotate(${img.dataset.r||0}deg)`;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M8 11h6"/></svg>
            </button>
            <button class="b-image__preview-btn" aria-label="Zoom In" onclick="let img=document.getElementById('demo-img'); let s=parseFloat(img.dataset.s||1)+0.5; img.dataset.s=s; img.style.transform=`scale(${s}) rotate(${img.dataset.r||0}deg)`;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>
            </button>
            <button class="b-image__preview-btn b-image__preview-btn--close" aria-label="Close" onclick="document.getElementById('demo-lightbox').style.display='none'">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
        </div>
        <div class="b-image__preview-container">
            <img id="demo-img" class="b-image__preview-img" src="https://picsum.photos/800/600?3" alt="Fullscreen View" style="transform: scale(1) rotate(0deg); transition: transform 0.2s;" />
        </div>
    </div>
</div>

```html
<!-- 1. Inline Trigger -->
<div class="b-image js-lightbox-trigger">
    <img class="b-image__el" src="/path/to/image.jpg" alt="Description" />
    <div class="b-image__preview-indicator" aria-hidden="true">
        <div class="b-image__preview-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</div>

<!-- 2. Portal Mask (Place near closing </body> tag) -->
<div class="b-image__preview-mask js-lightbox-mask" style="display: none;">
    <div class="b-image__preview-toolbar">
        <button class="b-image__preview-btn js-btn-rot-left">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        </button>
        <button class="b-image__preview-btn js-btn-rot-right">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
        </button>
        <button class="b-image__preview-btn js-btn-zoom-out">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M8 11h6"/></svg>
        </button>
        <button class="b-image__preview-btn js-btn-zoom-in">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>
        </button>
        <button class="b-image__preview-btn b-image__preview-btn--close js-btn-close">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
    </div>
    <div class="b-image__preview-container">
        <img class="b-image__preview-img js-lightbox-img" src="/path/to/image.jpg" style="transition: transform 0.2s; transform: scale(1) rotate(0deg);" />
    </div>
</div>

<!-- 3. Implementation Logic -->
<script>
document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.querySelector('.js-lightbox-trigger');
    const mask = document.querySelector('.js-lightbox-mask');
    const img = mask.querySelector('.js-lightbox-img');
    
    let scale = 1;
    let rotate = 0;

    const updateTransform = () => {
        img.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
    };

    const closeLightbox = () => { mask.style.display = 'none'; };

    // Open Lightbox
    trigger.addEventListener('click', () => {
        scale = 1; rotate = 0; updateTransform();
        mask.style.display = 'flex';
    });

    // Close on background click or Close button
    mask.addEventListener('click', (e) => {
        if (e.target === mask || e.target.classList.contains('b-image__preview-container')) closeLightbox();
    });
    mask.querySelector('.js-btn-close').addEventListener('click', closeLightbox);

    // Toolbar Controls
    mask.querySelector('.js-btn-zoom-in').addEventListener('click', () => { scale += 0.5; updateTransform(); });
    mask.querySelector('.js-btn-zoom-out').addEventListener('click', () => { scale = Math.max(0.5, scale - 0.5); updateTransform(); });
    mask.querySelector('.js-btn-rot-left').addEventListener('click', () => { rotate -= 90; updateTransform(); });
    mask.querySelector('.js-btn-rot-right').addEventListener('click', () => { rotate += 90; updateTransform(); });
});
</script>