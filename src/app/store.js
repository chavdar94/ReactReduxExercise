import { configureStore } from '@reduxjs/toolkit';

import shoppingCartReducer from '../components/ShoppingCart/shippingCarSlicer';

export const store = configureStore({
    reducer: {
        cartFuncs: shoppingCartReducer,
    },
});
