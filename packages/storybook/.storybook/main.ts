// main.ts
import { join, dirname } from "path";

import type { StorybookConfig } from "@storybook/react-vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "./welcome.stories.mdx",
    // 匹配 packages/components/ 下所有组件的 stories
    "../../components/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    // 一些插件 具体功能可去官网查看 这里就不赘述了
    getAbsolutePath("storybook-dark-mode"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite") as "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // packages/storybook/ 目录下新建一个 public/ 目录 所以静态文件服务的路径
  staticDirs: ["../public"],
};
export default config;