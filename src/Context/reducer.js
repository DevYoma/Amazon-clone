//this is where all the data logic goes
//so all the parameters in the useReducer hook is defined in this file(reducer.js)

import LeanStartUp from '../assets/LeanStartUp.jpg';


export const initialState = {
    basket: [{
        id: '39393939',
        title: 'Introduction to Computer Programming using the C# programming language',
        price: 600.00,
        rating: 4,
        image: LeanStartUp
    },
    {
        id: '39393939',
        title: 'Introduction to Computer Programming using the JAVA programming language',
        price: 600.00,
        rating: 4,
        image: LeanStartUp
    }
    ],
    user: null,
}

//total amount in the basket
export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price+ amount, 0)
    )

function reducer(state, action){
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //login for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
            //logic for removing items from basket

            //cloning the basket
            let newBasket = [...state.basket];

            //checked to see if the product exists...            
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if(index >= 0){
                //item exists in basket, remove it
                newBasket.splice(index, 1)
                //code above removes the second object in the array...

            }
            else{
                console.warn(`Cant remove product (id: ${action.id}) as it does not exist`);
            }

            return { ...state,
                    basket: newBasket
            }
            break;
        default:
            return state;        
    }
}

export default reducer;