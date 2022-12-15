import axios from "axios";

const USERS_URL = 'http://localhost:4000/users'
const LIKES_URL = 'http://localhost:4000/users/:uid/likes/:cid'

const api = axios.create({withCredentials: true})

export const userLikesRecipe = async (cid) => {
    const response = await api.post(`${USERS_URL}/likes/${cid}`)
    return response.data
}

export const findRecipesLikedByUser = async (uid) => {
    const response = await api.get(`${USERS_URL}/${uid}/likes`)
    return response.data
}