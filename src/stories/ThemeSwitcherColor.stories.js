import React from "react";
import ThemeSwitcherColor from "../components/ThemeSwitcherColor/ThemeSwitcherColor";
import { ButtonPrimary } from "./Button.stories";
export default {
  title: "MUI Components/ThemeSwitcher/ThemeSwitcherColor",
  component: ThemeSwitcherColor,
  argTypes: {},
};

const Template = (args) => {
  return (
    <ThemeSwitcherColor {...args}>
      <ButtonPrimary {...ButtonPrimary.args}></ButtonPrimary>
    </ThemeSwitcherColor>
  );
};
console.log();
export const ThemeSwitcherColorPrimary = Template.bind({});
ThemeSwitcherColorPrimary.args = {};
