import type { Component, App } from "vue";
import TButton from "./components/button";
const components: {
  [propName: string]: Component;
} = {
  TButton,
};
const installComponents: any = (app: App) => {
  // components.forEach((comp: any) => {
  //   app.component(comp.name as string, comp)
  // })
  //   app.use(ElementPlus, {
  //     locale // 语言设置
  //   // size: Cookies.get('size') || 'medium' // 设置默认尺寸
  // })
  for (const key in components) {
    app.component(key, components[key]);
  }
};
const install: any = (app: any) => {
  // !router && installRouter(app);
  installComponents(app);
};

// 按需引入
export { TButton };
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
};
