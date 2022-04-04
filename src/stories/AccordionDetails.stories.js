import React from "react";
import AccordionDetails from "../components/AccordionDetails/AccordionDetails";
import { commonArgs } from "./commonArgs";
import EmptyBody1 from "./Typography.stories";

export default {
  title: "MUI Components/Accordion/AccordionDetails",
  component: AccordionDetails,
  argTypes: {
    sx: commonArgs.sx,
  },
};

const Template = (args) => (
  <AccordionDetails {...args}>{args.children}</AccordionDetails>
);

export const AccordionDetailsPrimary = Template.bind({});
AccordionDetailsPrimary.args = {};
