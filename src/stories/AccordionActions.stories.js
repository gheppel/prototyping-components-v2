import React from "react";
import AccordionActions from "../components/AccordionActions/AccordionActions";
import { commonArgs } from "./commonArgs";

export default {
  title: "MUI Components/Accordion/AccordionActions",
  component: AccordionActions,
  argTypes: {
    sx: commonArgs.sx,
  },
};

const Template = (args) => (
  <AccordionActions {...args}>{args.children}</AccordionActions>
);

export const AccordionActionsPrimary = Template.bind({});
AccordionActionsPrimary.args = {};
