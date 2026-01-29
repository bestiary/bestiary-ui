import Button from "./Button.vue";
import { withInstall, type SFCWithInstall } from "@bestiary-ui/utils";

export const BButton = withInstall(Button) as SFCWithInstall<typeof Button>;
export default Button;

export * from "./button.types";
