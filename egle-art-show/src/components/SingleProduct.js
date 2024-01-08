import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = ({ products }) => {
  const { id } = useParams();

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  const product = products.find((product) => product.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const { name, price, description } = product;
  const productImage = `/pics/pic${id}.jpg`;

  return (
    <div className='name-size'>
      <h2>{name}</h2>
    <div className="product-container">
      <div className="product-details">
        <p>{description}</p>
        <p>Price: {price}€</p>
        <button>Add to Cart</button>
      </div>
      <div className="product-image">
        <img src={productImage} alt={name} />
      </div>
    </div>
    </div>
  );
};

export default SingleProduct;

