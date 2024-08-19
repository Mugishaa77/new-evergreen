import React, { useState } from 'react';

const ProductPage = ({ products, isLoading, error, handleAddToBasket }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Dairy', 'Poultry', 'Fruits', 'Vegetables'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="basket">
      {isLoading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>An error occurred</p>
      ) : (
        <>
          <h2>Fresh Market</h2>
          <div className="categories">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'active' : ''}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="products">
            {filteredProducts.map((product) => (
              <div key={product._id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">Kshs {product.price}</span>
                </div>
                <button onClick={() => handleAddToBasket(product)}>Add to Basket</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
