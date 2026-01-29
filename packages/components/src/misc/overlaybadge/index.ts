import OverlayBadge from "./OverlayBadge.vue";
import { withInstall, type SFCWithInstall } from "@bestiary-ui/utils";

export const BOverlayBadge = withInstall(OverlayBadge) as SFCWithInstall<typeof OverlayBadge>;
export default OverlayBadge;

export * from "./overlayBadge.types";