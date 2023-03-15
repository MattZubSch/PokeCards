import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";

import CardListReducer from "./reducers/cardList.reducer";
import PackScreenReducer from "./reducers/packScreen.reducer";
import PokemonsReducer from "./reducers/pokemon.reducer";

const RootReducer = combineReducers ({
    packScreen: PackScreenReducer,
    obtainedCards: CardListReducer,
    pokemons: PokemonsReducer,
        
})

export default createStore(RootReducer, applyMiddleware(thunk))
