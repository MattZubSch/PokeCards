import { createStore, combineReducers } from "redux";

import CardListReducer from "./cardList.reducer";
import PackScreenReducer from "./packScreen.reducer";

const RootReducer = combineReducers ({
    packScreen: PackScreenReducer,
    obtainedCards: CardListReducer
})

export default createStore(RootReducer)
