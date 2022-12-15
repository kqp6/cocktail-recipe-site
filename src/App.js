import 'bootstrap/dist/css/bootstrap.min.css';
import './vendors/bootswatch/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

import Navigation from "./navigation";

import Cocktails from "./cocktails";
import CocktailSearch from "./recipe/recipe-search";
import RecipeDetails from "./recipe/recipe-details";

import cocktailsReducer from "./cocktails/cocktails-reducer";
import recipesReducer from "./recipe/recipe-reducer";

import {likesReducer} from "./likes/likes-reducer";
import usersReducer from "./users/users-reducer";
import reviewsReducer from "./reviews/reviews-reducer";
import followsReducer from "./follows/follows-reducer";

import Users from "./users";
import Login from "./users/login";
import Register from "./users/register";
import CurrentUser from "./users/current-user";
import Profile from "./users/profile";
import ProtectedRoute from "./users/protected-route";
import PublicProfile from "./users/public-profile";

const store = configureStore({
  reducer: {
    cocktails: cocktailsReducer,
    recipes: recipesReducer,
    likes: likesReducer,
    users: usersReducer,
    reviews: reviewsReducer,
    follows: followsReducer
  }
})

function App() {
  return (
    <div className="container mt-5 mb-5">
      <Provider store={store}>
        <BrowserRouter>
          <CurrentUser>
            <Navigation/>
            <Routes>
              <Route index element={<Cocktails/>}/>
              <Route path="/search" element={<CocktailSearch/>}/>
              <Route path="/users" element={
                <ProtectedRoute>
                    <Users/>
                </ProtectedRoute>
              }/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/profile" element={
                  <ProtectedRoute>
                      <Profile/>
                  </ProtectedRoute>
              }/>
              <Route path="/details/:cID" element={<RecipeDetails/>}/>
              <Route path="/profile/:uid" element={<PublicProfile/>}/>
            </Routes>
          </CurrentUser>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
