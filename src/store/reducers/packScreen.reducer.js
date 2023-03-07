import { POKEMONS } from "../../data/pokemon";

const initialState = {
    pokemons: POKEMONS,
    filteredCards: [],
    selected: null
}

const PackScreenReducer = (state = initialState, action) => {
    return state
} 

export default PackScreenReducer