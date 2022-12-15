import axios from "axios";
const COCKTAIL_API_URL = 'http://localhost:4000/cocktails';

export const createCocktail = async (newCocktail) => {
    const response = await axios.post(COCKTAIL_API_URL, newCocktail)
    const actualMovie = response.data
    return actualMovie
}
export const findAllCocktails = async () => {
    const response = await axios.get(COCKTAIL_API_URL)
    const cocktail = response.data
    return cocktail
}
export const updateCocktail = async () => {}
export const deleteCocktail = async (cid) => {
    const response = await axios.delete(`${COCKTAIL_API_URL}/${cid}`)
    const status = response.data
    return cid;
}

