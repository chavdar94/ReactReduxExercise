import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    cartItems: [
        { id: 1, name: 'Item1' },
        { id: 2, name: 'Item2' },
        { id: 3, name: 'Item3' },
        { id: 4, name: 'Item4' },
        { id: 5, name: 'Item5' },
    ],
};

export const shoppingCartSlicer = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        add: (state, action) => {
            state.items.push(action.payload);
        },
        addItem: {
            reducer(state, action) {
                state.cartItems.push(action.payload);
            },
            prepare(name) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                    },
                };
            },
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

export const { add, addItem, remove, clearAll } = shoppingCartSlicer.actions;

export default shoppingCartSlicer.reducer;
