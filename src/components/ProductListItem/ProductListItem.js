import './ProductListItem.css';

const ProductListItem = ({name, price, imageUrl, onAddToCart}) => {
  return (
    <div className="card">
        <h2>{name}</h2>
        <img src={imageUrl} alt={name} className="card-img-top" />
        <small>{price}</small>
        <button onClick={onAddToCart}>Add to Cart</button>  
    </div>
  );
};

export default ProductListItem;