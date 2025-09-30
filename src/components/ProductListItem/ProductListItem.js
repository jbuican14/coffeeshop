import './ProductListItem.css';

const ProductListItem = ({name, price, imageUrl, onAddToCart, isSoldOut}) => {
  return (
    <div className="card">
        <h2>{name}</h2>
        <img src={imageUrl} alt={name} className="card-img-top" />
        <small>{price}</small>
        <button onClick={onAddToCart} disabled={isSoldOut}>
          {isSoldOut ? 'Sold Out' : 'Add to Cart'}
        </button>  
    </div>
  );
};

export default ProductListItem;