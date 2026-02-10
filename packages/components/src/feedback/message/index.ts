import Message from "./Message.vue";
import {withInstall} from "../../utils/with-install.ts";

export const BMessage = withInstall(Message);
export default BMessage;

export * from "./message.types";