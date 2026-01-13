import { defineComponent as n, computed as a, createElementBlock as l, openBlock as d, normalizeClass as r, renderSlot as u } from "vue";
/* empty css           */
const c = ["disabled"], b = /* @__PURE__ */ n({
  name: "BButton",
  __name: "Button",
  props: {
    type: { default: "primary" },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = a(() => [
      "b-button",
      `b-button--${t.type}`,
      `b-button--${t.size}`
    ]);
    return (s, i) => (d(), l("button", {
      class: r(o.value),
      disabled: e.disabled
    }, [
      u(s.$slots, "default")
    ], 10, c));
  }
});
export {
  b as default
};
