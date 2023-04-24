import React from "react";
import Link, {Props} from "./Link";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Link",
  component: Link,
};

const Template = (args: Props) => <Link {...args}>My link</Link>;

export const Default = Template.bind({});

Default.args = {
  href: "/"
};

export const Disabled = Template.bind({});

Disabled.args = {
  href: "/",
  disabled: true
};