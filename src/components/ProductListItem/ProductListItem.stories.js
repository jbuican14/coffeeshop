import ProductListItem from "./ProductListItem";
import { fn } from "@storybook/test";

export default {
  title: "ProductListItem",
  component: ProductListItem,
  tags: ["autodocs"],
  argTypes: {
    onAddToCart: { action: "added to cart" },
    isSoldOut: { control: "boolean" },
  },
};

export const Default = (args) => <ProductListItem {...args} />;

Default.args = {
  name: "Espresso",
  price: 3.5,
  description: "A strong and bold coffee shot.",
  imageUrl:
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80", // coffee cup image from Unsplash
  onAddToCart: fn(),
  isSoldOut: false,
};

export const SoldOut = (args) => <ProductListItem {...args} />;

SoldOut.args = {
  ...Default.args,
  isSoldOut: true,
};
