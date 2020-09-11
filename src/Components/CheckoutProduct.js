import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from '../Context/StateProvider';

const CheckoutProduct = ({ id, title, image, price, rating }) => {

    //pulling in the useContext part of the stateProvider
    const[{basket}, dispatch] = useStateValue();

    //this is a debugging technique
    console.log(id, title, image, price, rating);

    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id 
        })
    }

    return ( 
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}  alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        //we want to loop through the rating no and show the no of rating as stars
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐️</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
     );
}
 
export default CheckoutProduct;