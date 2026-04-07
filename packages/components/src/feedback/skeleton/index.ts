import Skeleton from "./Skeleton.vue";
import { withInstall } from "../../utils/with-install.ts";

export const BSkeleton = withInstall(Skeleton);
export default BSkeleton;

export * from "./skeleton.props.ts";