import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
    theme: create({
        base:"dark",
        brandTitle: "Health Circle.",
        brandUrl: "https://imercfy.com",
        // brandImage:"D:\HealthCare-ReactNextjs\healthcircle-next\apps\healthcircle\public\HCLogo.png",
        brandTarget: '_self'
       
    }),
    showPanel: true,
});