import {createSlice} from "@reduxjs/toolkit";
import {findRecipesLikedByUserThunk, userLikesRecipeThunk} from "./likes-thunks";

const initialState = {
    likes: [],
    loading: false
}

export const likesReducer = createSlice({
    name: 'likes',
    initialState,
    extraReducers: {
        [userLikesRecipeThunk.fulfilled]: (state, action) => {
            state.likes.push(action.payload)
        },
        [findRecipesLikedByUserThunk.fulfilled]: (state, {payload}) => {
            state.likes = payload
        },
        [findRecipesLikedByUserThunk.rejected]: (state, {payload}) => {
            state.likes = []
        }
    }
})