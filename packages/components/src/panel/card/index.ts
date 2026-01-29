import Card from "./Card.vue";
import { withInstall, type SFCWithInstall } from "@bestiary-ui/utils";

export const BCard = withInstall(Card) as SFCWithInstall<typeof Card>;
export default Card;

export * from "./card.types";
