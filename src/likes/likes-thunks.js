import {createAsyncThunk} from "@reduxjs/toolkit";
import {findRecipesLikedByUser, userLikesRecipe} from "./likes-service";

export const userLikesRecipeThunk = createAsyncThunk(
    'userLikesRecipe',
    async (like) => {
        return await userLikesRecipe(like.cid)
    }
)
export const findRecipesLikedByUserThunk = createAsyncThunk(
    'findRecipesLikedByUser',
    async (uid) => await findRecipesLikedByUser(uid)
)