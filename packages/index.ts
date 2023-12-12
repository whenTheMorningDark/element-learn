import type { Component, App } from "vue";
import KButton from "./components/button";
const components: {
  [propName: string]: Component;
} = {
  KButton,
};
const installComponents: any = (app: App) => {
  for (const key in components) {
    app.component(key, components[key]);
  }
};
const install: any = (app: any) => {
  // !router && installRouter(app);
  installComponents(app);
};

// 按需引入
export { KButton };
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
};
