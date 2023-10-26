import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    workers: [],
};

export const workersSlicer = createSlice({
    name: 'workers',
    initialState,
    reducers: {
        add: (state, action) => {
            state.workers = state.workers.concat(action.payload);
        },
    },
});

export const { add } = workersSlicer.actions;
export const workersList = (state) => state.workers.workers;
export default workersSlicer.reducer;
