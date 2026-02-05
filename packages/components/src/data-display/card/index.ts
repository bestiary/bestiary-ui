import Card from "./Card.vue";
import { withInstall } from "../../utils/with-install.ts";

export const BCard = withInstall(Card);
export default BCard;

export * from "./card.types.ts";
