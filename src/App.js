import './App.css';
import ProductListItem from './components/ProductListItem/ProductListItem';

function App() {
  return (
    <div className="App">
      <ProductListItem
        name="Espresso"
        price={3.5}
        description="A strong and bold coffee shot."
        imageUrl="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80"
        isSoldOut={false}
        onAddToCart={() => alert('Added to cart!')}
      />
    </div>
  );
}

export default App;
