import {createSlice} from "@reduxjs/toolkit";
import {createCocktailThunk, deleteCocktailThunk, findAllCocktailsThunk} from "./cocktails-thunks";

const initialState = {
    cocktails: [],
    loading: true
}

const cocktailsReducer = createSlice({
    name: 'cocktails',
    initialState: initialState,
    extraReducers: {
        [findAllCocktailsThunk.fulfilled]: (state, action) => {
            state.cocktails = action.payload
        },
        [createCocktailThunk.fulfilled]: (state, action) => {
            state.cocktails.push(action.payload)
        },
        [deleteCocktailThunk.fulfilled]: (state, action) => {
            // const midx = state.findIndex(m => m._id === action.payload)
            state.cocktails = state.cocktails.filter(c => {
                return c._id !== action.payload
            })
        }
    }
})

export default cocktailsReducer.reducer;