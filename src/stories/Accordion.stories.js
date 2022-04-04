import React from "react";
import Accordion from "../components/Accordion/Accordion";
//import { AccordionActionsPrimary } from "./AccordionActions.stories";
import { AccordionDetailsPrimary } from "./AccordionDetails.stories";
import { AccordionSummaryPrimary } from "./AccordionSummary.stories";
import { EmptyBody1 } from "./Typography.stories";
import { commonArgs } from "./commonArgs";

export default {
  title: "MUI Components/Accordion/Accordion",
  component: Accordion,
  argTypes: {
    sx: commonArgs.sx,
  },
};

const Template = (args) => (
  <Accordion {...args}>
    <AccordionSummaryPrimary {...AccordionSummaryPrimary.args}>
      <EmptyBody1 {...EmptyBody1.args}>Accordion 1</EmptyBody1>
    </AccordionSummaryPrimary>
    <AccordionDetailsPrimary {...AccordionDetailsPrimary.args}>
      <EmptyBody1 {...EmptyBody1.args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </EmptyBody1>
    </AccordionDetailsPrimary>
  </Accordion>
);

export const AccordionPrimary = Template.bind({});
AccordionPrimary.args = {};
