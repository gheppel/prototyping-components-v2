import React from "react";
import { commonArgs } from "./commonArgs";
import Typography from "../components/Typography/Typography";

export default {
  title: "MUI Components/Typography",
  component: Typography,
  argTypes: {
    sx: commonArgs.sx,
  },
};

const Template = (args) => <Typography {...args}></Typography>;

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: "h1",
  children: "Heading-Level One",
};
export const Heading2 = Template.bind({});
Heading2.args = {
  variant: "h2",
  children: "Heading-Level Two",
};
export const Subtitle = Template.bind({});
Subtitle.args = {
  variant: "subtitle1",
  children: "Subtitle to accompany a heading",
};
export const Body1 = Template.bind({});
Body1.args = {
  variant: "body1",
  children:
    "Es gibt im Moment in diese Mannschaft, oh, einige Spieler vergessen ihnen Profi was sie sind. Ich lese nicht sehr viele Zeitungen, aber ich habe gehört viele Situationen. Erstens: wir haben nicht offensiv gespielt. Es gibt keine deutsche Mannschaft spielt offensiv und die Name offensiv wie Bayern. Letzte Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann Zickler.",
};
export const EmptyBody1 = Template.bind({});
EmptyBody1.args = {
  variant: "body1",
};
