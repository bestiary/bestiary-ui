import Badge from "./Badge.vue";
import { withInstall, type SFCWithInstall } from "@bestiary-ui/utils";

export const BBadge = withInstall(Badge) as SFCWithInstall<typeof Badge>;
export default Badge;

export * from "./badge.types";
