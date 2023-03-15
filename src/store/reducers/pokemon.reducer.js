import { POKEMONS } from "../../data/pokemon";

const initialState = {
    pokemons: POKEMONS,
    selected: null
}

const PokemonsReducer = (state = initialState, action) => {
    return state
}

export default PokemonsReducer