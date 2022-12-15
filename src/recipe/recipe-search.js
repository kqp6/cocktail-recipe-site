import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findRecipeBySearchTermThunk} from "./recipe-thunks";
import {userLikesRecipeThunk} from "../likes/likes-thunks";

import {Link} from "react-router-dom";

const CocktailSearch = () => {
    const [searchTerm, setSearchTerm] = useState('Bloody Mary')
    const {cocktails, loading} = useSelector((state) => state.recipes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findRecipeBySearchTermThunk(searchTerm))
    }, [])
    return (
        <>
            <h1>Recipe Search</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            dispatch(findRecipeBySearchTermThunk(searchTerm))
                        }}>Search
                    </button>
                    <input
                        className="form-control w-75"
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                        value={searchTerm}/>
                </li>
                {
                    cocktails && cocktails.map((cocktail) =>
                        <li key={cocktail.idDrink} className="list-group-item">
                            <i onClick={() => {
                                dispatch(userLikesRecipeThunk({
                                    uid: 111, cid: cocktail.idDrink
                                }))
                            }} className="float-end bi bi-hand-thumbs-up"></i>
                            <i className="float-end bi bi-hand-thumbs-down me-2"></i>
                            <img src={cocktail.strDrinkThumb} height={50} className="me-2"/>
                            <Link to={`/details/${cocktail.idDrink}`}>
                                {cocktail.strDrink}
                            </Link>
                        </li>
                    )
                }
            </ul>

        </>
    )
}

export default CocktailSearch