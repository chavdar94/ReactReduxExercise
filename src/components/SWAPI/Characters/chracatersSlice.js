import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    characters: [],
    status: 'idle',
    error: null,
};

const baseUrl = 'https://swapi.dev/api/people';
export const getAllCharacters = createAsyncThunk(
    'characters/getAllCharacters',
    async () => {
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data.results;
    }
);

export const charactersSlicer = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        fetchCharacters: {
            reducer(state, action) {
                state.characters.push(action.payload);
            },
            prepare(name, birthYear, gender) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        birthYear,
                        gender,
                    },
                };
            },
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getAllCharacters.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getAllCharacters.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.characters = state.characters.concat(action.payload);
            })
            .addCase(getAllCharacters.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { fetchCharacters } = charactersSlicer.actions;
export const charactersLen = (state) => state.characters.characters.length;
export const characters = (state) => state.characters.characters;

export default charactersSlicer.reducer;
