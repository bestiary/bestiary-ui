import * as t from "./components.js";
import { BButton as a } from "./button/index.js";
const e = (n) => {
  for (const s in t) {
    const o = t[s];
    o.install && n.use(o);
  }
}, c = { install: e };
export {
  a as BButton,
  c as default
};
