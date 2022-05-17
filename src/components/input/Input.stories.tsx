/** @format */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args}></Input>
);

export const VariantName = Template.bind({});
VariantName.args = {};
