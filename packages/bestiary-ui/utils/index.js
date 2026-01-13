const o = typeof window < "u";
function l(s) {
  return typeof Element > "u" ? !1 : s instanceof Element;
}
const f = (s) => s, i = (...s) => {
  const e = {};
  for (const n of s)
    for (const t in n)
      t === "class" ? e.class !== n.class && (e.class = [e.class, n.class].filter(Boolean).join(" ")) : t === "style" ? e.style = { ...e.style, ...n.style } : e[t] = n[t];
  return e;
};
export {
  f as definePropType,
  o as isClient,
  l as isElement,
  i as mergeProps
};
