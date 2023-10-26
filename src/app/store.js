import { configureStore } from '@reduxjs/toolkit';

import shoppingCartReducer from '../components/ShoppingCart/shippingCartSlicer';
import chracatersReducer from '../components/SWAPI/Characters/chracatersSlice';
import workersReducer from '../components/Workers/workerSlice';

export const store = configureStore({
    reducer: {
        cartFuncs: shoppingCartReducer,
        characters: chracatersReducer,
        workers: workersReducer,
    },
});
