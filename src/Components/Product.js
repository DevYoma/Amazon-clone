import React from 'react';
import './Product.css';

const Product = ({  id, title, price, image, rating}) => {
    return ( 
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        //we want to loop through the rating no and show the no of rating as stars
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐️</p>
                        ))
                    }
                </div>
            </div>
           
            <img src={image} alt="Lean StartUp"/>
            <button>Add to basket</button>
        </div>
     );
}
 
export default Product;