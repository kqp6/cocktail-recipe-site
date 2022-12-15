import {createSlice} from "@reduxjs/toolkit";
import {findRecipeBySearchTerm} from "./recipe-service";
import {findRecipeByIdThunk, findRecipeBySearchTermThunk} from "./recipe-thunks";

const initialState = {
    cocktails: [],
    loading: false,
    details: {}
}

const recipesReducer = createSlice({
    name: 'recipes',
    initialState,
    extraReducers: {
        [findRecipeBySearchTermThunk.fulfilled]: (state, action) => {
            state.cocktails = action.payload
        },
        [findRecipeByIdThunk.fulfilled]: (state, action) => {
            state.details = action.payload
        }
    }
})

export default recipesReducer.reducer