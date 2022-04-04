import React from "react";
import AccordionSummary from "../components/AccordionSummary/AccordionSummary";
import { commonArgs } from "./commonArgs";
import { iconVariants } from "../components/Icon/icon-variants";

export default {
  title: "MUI Components/Accordion/AccordionSummary",
  component: AccordionSummary,
  argTypes: {
    sx: commonArgs.sx,
    expandedIcon: {
      options: iconVariants,
    },
  },
};

const Template = (args) => (
  <AccordionSummary {...args}>{args.children}</AccordionSummary>
);

export const AccordionSummaryPrimary = Template.bind({});
AccordionSummaryPrimary.args = {
  expandedIcon: "expand_more",
};
// export const AccordionSummaryExample = (args) => {
//   <AccordionSummary {...args}>
//     <EmptyBody1 {...EmptyBody1.args}>Accordion 1</EmptyBody1>
//   </AccordionSummary>;
// };
