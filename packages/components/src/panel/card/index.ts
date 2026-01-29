import Card from './Card.vue'
import { withInstall } from '../../utils/with-install.ts'

export const BCard = withInstall(Card)
export default Card;

export * from './card.types.ts'
