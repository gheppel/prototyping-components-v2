import React from "react";
import Card from "../components/Card/Card";
import { CardHeaderPrimary } from "./CardHeader.stories";
import { CardActionAreaPrimary } from "./CardActionArea.stories";
import { CardActionsPrimary } from "./CardActions.stories";
import { CardContentPrimary } from "./CardContent.stories";
import { CardMediaPrimary } from "./CardMedia.stories";
import { Heading2 } from "./Typography.stories";
import { Subtitle } from "./Typography.stories";
import { Body1 } from "./Typography.stories";
import { ButtonPrimary } from "./Button.stories";
import { commonArgs } from "./commonArgs";

export default {
  title: "MUI Components/Card/Card",
  component: Card,
  argTypes: {
    sx: commonArgs.sx,
  },
};

const Template = (args) => (
  <Card {...args}>
    <CardHeaderPrimary {...CardHeaderPrimary.args}></CardHeaderPrimary>
    <CardMediaPrimary {...CardMediaPrimary.args}></CardMediaPrimary>
    <CardActionAreaPrimary {...CardActionAreaPrimary.args}>
      <CardContentPrimary {...CardContentPrimary.args}>
        <Heading2 {...Heading2.args}></Heading2>
        <Subtitle {...Subtitle.args}></Subtitle>
        <Body1 {...Body1.args}></Body1>
      </CardContentPrimary>
      <CardActionsPrimary {...CardActionsPrimary.args}>
        <ButtonPrimary {...ButtonPrimary.args}></ButtonPrimary>
      </CardActionsPrimary>
    </CardActionAreaPrimary>
  </Card>
);

export const CardPrimary = Template.bind({});
CardPrimary.args = {
  sx: { maxWidth: 345 },
};
