import React from "react";
import Button, {Props} from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Button",
  component: Button,
};

const Template = (args: Props) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});

Default.args = {
  onClick: () => {
    alert("button click")
  }
};