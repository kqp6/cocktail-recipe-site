import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview, findReviewsByAuthor, findReviewsByRecipe} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => createReview(review)
)
export const findReviewsByRecipeThunk = createAsyncThunk(
    'findReviewsByRecipeThunk',
    async (ID) => findReviewsByRecipe(ID)

)
export const findReviewsByAuthorThunk = createAsyncThunk(
    'findReviewsByAuthorThunk',
    async (author) => findReviewsByAuthor(author)
)