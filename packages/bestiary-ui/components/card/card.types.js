import { definePropType as e } from "@bestiary-ui/utils";
const r = {
  shadow: {
    type: e(String),
    default: "always"
  },
  header: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: e(Object),
    default: () => ({})
  }
};
export {
  r as cardProps
};
