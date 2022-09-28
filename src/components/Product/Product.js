import React from 'react';
import './Product.css';

const Product = ({ product, addToCart }) => {
    const { name, category, ratings, price, img } = product;
    return (
        <div className='product'>
            <div className="banner">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h3>Name: {name}</h3>
                <p>Category: {category}</p>
                <p>Ratings: {ratings}</p>
                <h4>Price: {price}</h4>
            </div>
            <button className='add-to-cart-btn' onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default Product;