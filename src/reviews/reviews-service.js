import axios from "axios";

const REVIEW_API = 'http://localhost:4000/api/reviews'
const COCKTAIL_REVIEWS_API = 'http://localhost:4000/api/cocktails'
const AUTHOR_REVIEWS_API = 'http://localhost:4000/api/users'

const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
    const response = await api.post(REVIEW_API, review)
    return response.data
}

export const findReviewsByRecipe = async (cID) => {
    const response = await api.get(`${COCKTAIL_REVIEWS_API}/${cID}/reviews`)
    return response.data
}

export const findReviewsByAuthor = async (author) => {
    const response = await api.get(`${AUTHOR_REVIEWS_API}/${author}/reviews`)
    return response.data
}