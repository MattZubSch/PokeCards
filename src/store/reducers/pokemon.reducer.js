import { ReactReduxContext } from "react-redux";
import { POKEMON } from "../actions/pokemon.action";

const initialState = {
    pokemons: null
}

const PokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POKEMON:
            return {...state, pokemons: action.pokes}
        default:
            return state
    }
}

export default PokemonsReducer