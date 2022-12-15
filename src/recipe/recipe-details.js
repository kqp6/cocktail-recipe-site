import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {findRecipeByIdThunk} from "./recipe-thunks";

import {createReviewThunk, findReviewsByRecipeThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";

const RecipeDetails = () => {
    const {ID} = useParams()
    const [review, setReview] = useState('')
    const {reviews} = useSelector((state) => state.reviews)
    const {details} = useSelector((state) => state.recipes)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findRecipeByIdThunk(ID))
        dispatch(findReviewsByRecipeThunk(ID))
    },[])
    const handlePostReviewBtn = () => {
        dispatch(createReviewThunk({
            review,
            ID
        }))
    }
    return(
        <>
            <h1>{details.strDrink}</h1>
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item">Glass: {details.strGlass}</li>
                        <li className="list-group-item">Instruction: {details.strInstructions}</li>
                        <li className="list-group-item">Category: {details.strCategory}</li>
                        <li className="list-group-item">Ingredient1: {details.strIngredient1} - {details.strMeasure1}</li>
                        <li className="list-group-item">Ingredient2: {details.strIngredient2} - {details.strMeasure2}</li>
                        <li className="list-group-item">Ingredient3: {details.strIngredient3} - {details.strMeasure3}</li>
                        <li className="list-group-item">Ingredient4: {details.strIngredient4} - {details.strMeasure4}</li>
                        <li className="list-group-item">Ingredient5: {details.strIngredient5} - {details.strMeasure5}</li>
                    </ul>
                </div>
                <div className="col">
                    <img src={details.strDrinkThumb} height={500}/>
                </div>
            </div>
            {
                currentUser &&
                <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea>
                    <button onClick={handlePostReviewBtn}>Post Review</button>
                </div>
            }
            <ul className="list-group">
                {
                    reviews.map((review) =>
                        <li className="list-group-item">
                            {review.review}
                            <Link to={`/profile/${review.author._id}`} className="float-end">
                                {review.author.username}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </>
    )
}
export default RecipeDetails