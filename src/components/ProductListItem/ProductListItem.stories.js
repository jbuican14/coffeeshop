import ProductListItem from './ProductListItem';

export default {
  title: 'ProductListItem',
  component: ProductListItem,
};

export const Default = (args) => <ProductListItem {...args} />;

Default.args = {
    name: 'Espresso',
    price: 3.5,
    description: 'A strong and bold coffee shot.',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80', // coffee cup image from Unsplash
};