import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const shoppingCartSlicer = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        add: (state, action) => {
            state.items.push(action.payload);
        },
        remove: (state, action) => {
            const idToRemove = action.payload;
            const indexToRemove = state.items.findIndex(
                (item) => item.id === idToRemove
            );
            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1);
            }
        },
        clearAll: (state, action) => {
            const idToClear = action.payload;
            state.items = state.items.filter((item) => item.id !== idToClear);
        },
    },
});

export const { add, remove, clearAll } = shoppingCartSlicer.actions;

export default shoppingCartSlicer.reducer;
