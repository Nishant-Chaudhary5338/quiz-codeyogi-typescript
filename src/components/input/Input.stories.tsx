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

export const Main = Template.bind({});
Main.args = {};
export const withError = Template.bind({});
withError.args = {
  error: "value is not valid",
  value: "hello world",
  id: "hello",
};
