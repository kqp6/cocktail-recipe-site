import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createCocktailThunk, deleteCocktailThunk, findAllCocktailsThunk} from "./cocktails-thunks";
import {userLikesRecipeThunk} from "../likes/likes-thunks";


const Cocktails = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {cocktails} = useSelector((state) => state.cocktails)
    const [cocktail, setCocktail] = useState({title: 'New Cocktail'})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllCocktailsThunk())
    }, [])
    return(
        <>
            <h1>Custom Cocktail Recipes</h1>
            {
                currentUser &&
                <h2>Welcome {currentUser.username} </h2>
            }
            <ul className="list-group">
                { 
                    currentUser && 
                    <li className="list-group-item">
                        <button className="btn btn-success float-end" onClick={() => {
                            dispatch(createCocktailThunk(
                                {
                                    title: cocktail.title
                                }
                            ))
                        }}>Create</button>
                        <input
                            className="form-control w-75"
                            onChange={(e) =>
                                setCocktail({...cocktail, title: e.target.value})}
                            value={cocktail.title}/>
                    </li>
                }
                {
                    cocktails.map((cocktail) =>
                        <li className="list-group-item"
                            key={cocktail._id}>
                            <i onClick={() => {
                                dispatch(deleteCocktailThunk(cocktail._id))
                            }}
                                className={`${currentUser? '' : 'd-none'} bi bi-trash float-end`}></i>

                            <i onClick={() => {
                                dispatch(userLikesRecipeThunk({
                                    cid: cocktail._id
                                }))
                            }} className={`${currentUser? '' : 'd-none'} float-end bi bi-hand-thumbs-up me-2`}></i>
                            <i className={`${currentUser? '' : 'd-none'} float-end bi bi-hand-thumbs-down me-2`}></i>


                            {cocktail.title}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Cocktails;