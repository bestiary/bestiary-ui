import Progress from "./Progress.vue";
import {withInstall} from "../../utils/with-install";

export const BProgress = withInstall(Progress);
export default BProgress;

export * from "./progress.props";