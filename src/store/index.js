import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";

import AuthReducer from "./reducers/auth.reducer";
import CardListReducer from "./reducers/cardList.reducer";
import PackScreenReducer from "./reducers/packScreen.reducer";
import LoginReducer from "./reducers/login.reducer";

const RootReducer = combineReducers ({
    obtainedCards: CardListReducer,
    auth: AuthReducer,
    packScreen: PackScreenReducer,
    login: LoginReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))
