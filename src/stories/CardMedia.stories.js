import React from "react";
import CardMedia from "../components/CardMedia/CardMedia";
import { commonArgs } from "./commonArgs";

export default {
  title: "MUI Components/Card/CardMedia",
  component: CardMedia,
  argTypes: {
    sx: commonArgs.sx,
  },
};

const Template = (args) => <CardMedia {...args}></CardMedia>;

export const CardMediaPrimary = Template.bind({});
CardMediaPrimary.args = {
  height: 150,
  width: 150,
  component: "img",
  image: "https://via.placeholder.com/150",
  alt: "Placeholder Image, 150 Pixels",
};
