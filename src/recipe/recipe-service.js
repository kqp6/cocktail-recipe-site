import axios from "axios";

const SEARCH_URL = 'https://thecocktaildb.com/api/json/v1/1/search.php?s='
const DETAILS_URL = 'https://thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const findRecipeBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`)
    //console.log(response.data.drinks[0])
    return response.data.drinks

}

export const findRecipeById = async (cID) => {
    const response = await axios.get(`${DETAILS_URL}${cID}`)
    return response.data.drinks[0]
}