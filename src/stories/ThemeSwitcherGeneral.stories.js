import React from "react";
import ThemeSwitcherGeneral from "../components/ThemeSwitcherGeneral/ThemeSwitcherGeneral";
import { ButtonPrimary } from "./Button.stories";
export default {
  title: "MUI Components/ThemeSwitcher/ThemeSwitcherGeneral",
  component: ThemeSwitcherGeneral,
  argTypes: {},
};

const Template = (args) => {
  return (
    <ThemeSwitcherGeneral {...args}>
      <ButtonPrimary {...ButtonPrimary.args}></ButtonPrimary>
    </ThemeSwitcherGeneral>
  );
};
console.log();
export const ThemeSwitcherGeneralPrimary = Template.bind({});
ThemeSwitcherGeneralPrimary.args = {};
