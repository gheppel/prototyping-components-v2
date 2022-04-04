import React from "react";
import CardContent from "../components/CardContent/CardContent";
import { commonArgs } from "./commonArgs";

export default {
  title: "MUI Components/Card/CardContent",
  component: CardContent,
  argTypes: {
    sx: commonArgs.sx,
  },
};

const Template = (args) => <CardContent {...args}></CardContent>;

export const CardContentPrimary = Template.bind({});
CardContentPrimary.args = {
  component: "div",
};
