import { POKEMONS } from "../../data/pokemon";

const initialState = {
    pokemons: POKEMONS,
    selected: null
}

const PokemosReducer = (state = initialState, action) => {
    return state
}

export default PokemosReducer