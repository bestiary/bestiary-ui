import SplitterPanel from "./SplitterPanel.vue";
import { withInstall, type SFCWithInstall } from "@bestiary-ui/utils";

export const BSplitterPanel = withInstall(SplitterPanel) as SFCWithInstall<typeof SplitterPanel>;
export default SplitterPanel;

export * from "./splitterpanel.types";
