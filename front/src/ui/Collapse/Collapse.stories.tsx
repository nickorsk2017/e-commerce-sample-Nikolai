import React from "react";
import Collapse, {Props} from "./Collapse";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Collapse",
  component: Collapse,
};

const Template = (args: Props) => <Collapse {...args}>Open me!</Collapse>;

export const Default = Template.bind({});

Default.args = {
  content: "Hello world"
};