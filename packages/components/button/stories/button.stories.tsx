import type { Meta, StoryObj } from '@storybook/react';
// 这里请注意 ts 会抱怨😣找不到 '@storybook/react' module
// 需要在根目录下安装 "pnpm add @storybook/react -D -w"
// 这样所有的组件都可以共用该 module 了

import { Button } from '../src';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // 同时定义了页面左侧菜单
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// args 会作为 props 传递给组件
// Story的名会作为菜单的名称 自动首字母大写并按照大写字母拆分 UseAsButton => Use As Button
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
