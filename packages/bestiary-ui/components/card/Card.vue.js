import { defineComponent as t, createElementBlock as o, openBlock as r, normalizeClass as d, createCommentVNode as a, createElementVNode as l, renderSlot as s, createTextVNode as n, toDisplayString as i, normalizeStyle as m } from "vue";
import { cardProps as c } from "./card.types.js";
/* empty css         */
const p = {
  key: 0,
  class: "b-card__header"
}, h = {
  key: 1,
  class: "b-card__footer"
}, $ = /* @__PURE__ */ t({
  name: "BCard",
  __name: "Card",
  props: c,
  setup(f) {
    return (e, _) => (r(), o("div", {
      class: d([
        "b-card",
        `b-card--shadow-${e.shadow}`
      ])
    }, [
      e.$slots.header || e.header ? (r(), o("div", p, [
        s(e.$slots, "header", {}, () => [
          n(i(e.header), 1)
        ])
      ])) : a("", !0),
      l("div", {
        class: "b-card__body",
        style: m(e.bodyStyle)
      }, [
        s(e.$slots, "default")
      ], 4),
      e.$slots.footer ? (r(), o("div", h, [
        s(e.$slots, "footer")
      ])) : a("", !0)
    ], 2));
  }
});
export {
  $ as default
};
