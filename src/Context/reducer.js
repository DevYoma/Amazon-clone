//this is where all the data logic goes
//so all the parameters in the useReducer hook is defined in this file(reducer.js)

export const initialState = {
    basket: [],
    user: null
}

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
            return {state}
            break;
        default:
            return state;        
    }
}

export default reducer;