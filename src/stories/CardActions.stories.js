import React from "react";
import CardActions from "../components/CardActions/CardActions";
import { commonArgs } from "./commonArgs";

export default {
  title: "MUI Components/Card/CardActions",
  component: CardActions,
  argTypes: {
    sx: commonArgs.sx,
  },
};

const Template = (args) => <CardActions {...args}></CardActions>;

export const CardActionsPrimary = Template.bind({});
CardActionsPrimary.args = {};
