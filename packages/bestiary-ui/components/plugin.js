import * as t from "./components.js";
const e = {
  install(n) {
    for (const s in t) {
      const o = t[s];
      o.install && n.use(o);
    }
  }
};
export {
  e as BestiaryUI,
  e as default
};
