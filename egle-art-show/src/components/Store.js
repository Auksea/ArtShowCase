import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import products from './productsData';

const Store = () => {
  return (
    <div className="store">
      <h1>Store</h1>
      <div className="products">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            {/* Pass product prop to Product component */}
            <Product product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Store;

