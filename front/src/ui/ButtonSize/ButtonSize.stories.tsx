import React from "react";
import ButtonSize, {Props} from "./ButtonSize";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/ButtonSize",
  component: ButtonSize,
};

const Template = (args: Props) => <ButtonSize {...args}/>;

export const Default = Template.bind({});

Default.args = {
  size: "Large",
  selected: false,
  onSelect: (size: "Large") => {
    alert(size)
  }
};

export const Selected = Template.bind({});

Selected.args = {
  size: "Large",
  selected: true,
  onSelect: (size: "Large") => {
    alert(size)
  }
};