import { openBlock as r, createElementBlock as l } from "vue";
const f = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [c, s] of o)
    n[c] = s;
  return n;
}, a = {};
function p(t, o) {
  return r(), l("div", null, "buttonaaa");
}
const m = /* @__PURE__ */ f(a, [["render", p]]), u = (t, o) => {
  if (t.install = (n) => {
    for (const c of [t, ...Object.values(o ?? {})])
      n.component(c.name, c);
  }, o)
    for (const [n, c] of Object.entries(o))
      t[n] = c;
  return t;
}, _ = u(m), e = {
  TButton: _
}, i = (t) => {
  for (const o in e)
    t.component(o, e[o]);
}, d = (t) => {
  i(t);
}, v = {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install: d
};
export {
  _ as TButton,
  v as default
};
