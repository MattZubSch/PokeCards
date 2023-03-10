import { createStore, combineReducers } from "redux";

import CardListReducer from "./reducers/cardList.reducer";
import PackScreenReducer from "./reducers/packScreen.reducer";
import PokemosReducer from "./reducers/pokemon.reducer";

const RootReducer = combineReducers ({
    obtainedCards: CardListReducer,
    packScreen: PackScreenReducer,
    pokemons: PokemosReducer,
})

export default createStore(RootReducer)
