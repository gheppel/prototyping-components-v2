import React from "react";
import CardHeader from "../components/CardHeader/CardHeader";
import { commonArgs } from "./commonArgs";
import { iconVariants } from "../components/Icon/icon-variants";

export default {
  title: "MUI Components/Card/CardHeader",
  component: CardHeader,
  argTypes: {
    sx: commonArgs.sx,
    action: {
      options: iconVariants,
    },
  },
};

const Template = (args) => <CardHeader {...args}></CardHeader>;

export const CardHeaderPrimary = Template.bind({});
CardHeaderPrimary.args = {
  title: "MUI-Card",
  subheader: "MUI-Card Subtitle",
  avatar: "MUI",
  color: "grey",
  action: "add",
};
