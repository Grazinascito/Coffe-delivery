import { AddToCart } from "./AddToCart";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Wrapper } from "./Styles";

export default {
  title: "components/atoms/AddToCart",
  component: AddToCart,
} as ComponentMeta<typeof AddToCart>;

const Template: ComponentStory<typeof AddToCart> = (args) => (
  <Wrapper>
    <AddToCart {...args} />
  </Wrapper>
);

export const Sample = Template.bind({});

Sample.args = {
  price: "9.9",
};
