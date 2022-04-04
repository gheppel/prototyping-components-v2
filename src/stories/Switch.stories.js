import React from "react";
import Switch from "../components/Switch/Switch";
import { commonArgs } from "./commonArgs";

export default {
  title: "MUI Components/Switch",
  component: Switch,
  argTypes: {
    onClick: {
      action: "clicked",
    },
    sx: commonArgs.sx,
  },
};

const Template = (args) => <Switch {...args}></Switch>;

export const SwitchPrimary = Template.bind({});
SwitchPrimary.args = {
  checked: true,
  disabled: false,
  required: false,
};
// export const SwitchSecondary = Template.bind({});
// SwitchSecondary.args = {
//   checked: false,
//   disabled: true,
//   required: false,
// };
