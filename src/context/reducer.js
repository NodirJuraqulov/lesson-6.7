export const initialState = {
    count: 0,
    wishlist: [],
    token: null,
    cart: [],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "LIKED":
            return {
                ...state,
                wishlist: state.wishlist.some(item => item.id === action.payload.id)
                    ? state.wishlist.filter(item => item.id !== action.payload.id)
                    : [...state.wishlist, action.payload]
            }
            // return {...state, wishlist: [...state.wishlist, action.payload] }
        default:
            return state
    }  
}