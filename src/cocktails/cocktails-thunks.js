import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllCocktails, createCocktail, deleteCocktail} from "./cocktails-service";

export const createCocktailThunk = createAsyncThunk(
    'createCocktail',
    (newCocktail) => createCocktail(newCocktail)
)

export const findAllCocktailsThunk = createAsyncThunk(
    'findAllCocktails',
    () => findAllCocktails()
)

export const updateCocktailThunk = {}
export const deleteCocktailThunk = createAsyncThunk(
    'deleteCocktail',
    (cid) => deleteCocktail(cid)
)