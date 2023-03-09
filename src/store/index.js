import { createStore, combineReducers } from "redux";

import CardListReducer from "./reducers/cardList.reducer";
import PackScreenReducer from "./reducers/packScreen.reducer";
import PokemosReducer from "./reducers/pokemon.reducer";

const RootReducer = combineReducers ({
    packScreen: PackScreenReducer,
    obtainedCards: CardListReducer,
    pokemons: PokemosReducer
})

export default createStore(RootReducer)
