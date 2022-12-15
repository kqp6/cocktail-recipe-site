import {createAsyncThunk} from "@reduxjs/toolkit";
import {findRecipeById, findRecipeBySearchTerm} from "./recipe-service";

export const findRecipeBySearchTermThunk = createAsyncThunk(
    'findRecipeBySearchTerm',
    (term) => findRecipeBySearchTerm(term)
)
export const findRecipeByIdThunk = createAsyncThunk(
    'findRecipeById',
    (ID) => findRecipeById(ID)
)