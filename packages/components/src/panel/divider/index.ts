import Divider from "./Divider.vue";
import { withInstall, type SFCWithInstall } from "@bestiary-ui/utils";

export const BDivider = withInstall(Divider) as SFCWithInstall<typeof Divider>;
export default Divider;

export * from "./divider.types";
