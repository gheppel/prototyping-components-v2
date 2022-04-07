import React from "react";
import ThemeSwitcherGlobal from "../components/ThemeSwitcherGlobal/ThemeSwitcherGlobal";
import { ButtonPrimary } from "./Button.stories";
export default {
  title: "MUI Components/ThemeSwitcher/ThemeSwitcherGlobal",
  component: ThemeSwitcherGlobal,
  argTypes: {},
};

const Template = (args) => {
  return (
    <ThemeSwitcherGlobal {...args}>
      <ButtonPrimary {...ButtonPrimary.args}></ButtonPrimary>
    </ThemeSwitcherGlobal>
  );
};
console.log();
export const ThemeSwitcherGlobalPrimary = Template.bind({});
ThemeSwitcherGlobalPrimary.args = {};
