//this is where all the data logic goes
//so all the parameters in the useReducer hook is defined in this file(reducer.js)

export const initialState = {
    basket: [],
    user: null,
}

//total amount in the basket
export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price+ amount, 0)
    )

function reducer(state, action){
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            //update the user when logged in or out
            return {
                ...state,
                user: action.user
            }
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