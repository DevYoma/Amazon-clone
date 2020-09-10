import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import './Checkout.css';

const Checkout = () => {
    
    //dispatch is needed whenever you want to manipulate data like add, delete, update  🙃
    const [{basket}, dispatch] = useStateValue()

    return ( 
        <div className="checkout">
           
            {/* optional parameter in javascript...  */}
            { basket?.length === 0 ? (
                <div>
                    <h2>Your shopping Basket is Empty 😞</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>
            ) }


        </div>

     );
}
 
export default Checkout;