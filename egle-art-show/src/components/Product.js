import React from 'react';
import './Product.css';

const Product = ({ product, addToCart }) => {
  const { id, name, price } = product;
  const productImage = `/pics/pic${id}.jpg`;

  return (
    <div className="product">
      <img src={productImage} alt={name} />
      <h3>{name}</h3>
      <p>Price: {price}€</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;