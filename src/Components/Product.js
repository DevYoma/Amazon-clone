import React from 'react';
import './Product.css';
import {useStateValue} from '../Context/StateProvider';

const Product = ({  id, title, price, image, rating}) => {

    //pulling the data layer into this component
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        //add item to basket...
        dispatch({
            type: 'ADD_TO_BASKET',
            //item can be payload 😉
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

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
            <button onClick={addToBasket}>Add to basket</button>
        </div>
     );
}
 
export default Product;