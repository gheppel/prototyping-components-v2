import React from "react";
import Button from "../components/Button/Button";
import { commonArgs } from "./commonArgs";
import { iconVariants } from "../components/Icon/icon-variants";
export default {
  title: "MUI Components/Button",
  component: Button,
  argTypes: {
    sx: commonArgs.sx,
    startIcon: {
      options: iconVariants,
    },
    endIcon: {
      options: iconVariants,
    },
  },
};

const Template = (args) => <Button {...args}>{args.children}</Button>;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  children: "Primärbutton",
  variant: "contained",
};
