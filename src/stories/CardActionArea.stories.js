import React from "react";
import CardActionArea from "../components/CardActionArea/CardActionArea";
import { commonArgs } from "./commonArgs";

export default {
  title: "MUI Components/Card/CardActionArea",
  component: CardActionArea,
  argTypes: {
    sx: commonArgs.sx,
  },
};

const Template = (args) => <CardActionArea {...args} />;

export const CardActionAreaPrimary = Template.bind({});
CardActionAreaPrimary.args = {};
