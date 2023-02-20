import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IntroItems, IntroItemsProps } from "./IntroItems";
import cart2 from "../../../assets/icons/cart2.svg";
export default {
  title: "components/atoms/IntroItems",
  component: IntroItems,
} as ComponentMeta<typeof IntroItems>;

const Template: ComponentStory<typeof IntroItems> = (args: IntroItemsProps) => (
  <IntroItems {...args} />
);

export const Sample = Template.bind({});

Sample.args = {
  children: "Exemplo de itens",
  icons: cart2,
  alt: "Exemplo de itens",
};
