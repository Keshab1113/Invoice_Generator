// src/redux/actions/productActions.ts
export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
});

export const removeProduct = (index) => ({
    type: 'REMOVE_PRODUCT',
    payload: index,
});

// src/redux/reducers/productReducer.ts
const initialState = [];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.payload];
        case 'REMOVE_PRODUCT':
            return state.filter((_, index) => index !== action.payload);
        default:
            return state;
    }
};

export default productReducer;
