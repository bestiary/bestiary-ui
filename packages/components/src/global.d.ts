import type { BButton } from "./button/button";
import type { BBadge } from "./misc/badge";
import type { BOverlayBadge } from "./misc/overlaybadge";
import type { BCard } from "./panel/card";
import type { BDivider } from "./panel/divider";
import type { BSplitter } from "./panel/splitter";
import type { BSplitterPanel } from "./panel/splitterpanel";

declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        BButton: typeof BButton;
        BBadge: typeof BBadge;
        BOverlayBadge: typeof BOverlayBadge;
        BCard: typeof BCard;
        BDivider: typeof BDivider;
        BSplitter: typeof BSplitter;
        BSplitterPanel: typeof BSplitterPanel;
    }
}

export { };
