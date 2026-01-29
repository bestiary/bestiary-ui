import Splitter from "./Splitter.vue";
import { withInstall, type SFCWithInstall } from "@bestiary-ui/utils";

export const BSplitter = withInstall(Splitter) as SFCWithInstall<typeof Splitter>;
export default Splitter;

export * from "./splitter.types";
