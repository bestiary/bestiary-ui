import Rating from "./Rating.vue";
import {withInstall} from "../../utils/with-install.ts";

export const BRating = withInstall(Rating);
export default BRating;
export * from "./rating.props.ts";