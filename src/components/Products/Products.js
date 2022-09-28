import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <section className='shop'>
            <p>Available Products: {products.length}</p>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
        </section>
    );
};

export default Products;