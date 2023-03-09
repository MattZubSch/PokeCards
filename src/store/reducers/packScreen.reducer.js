import { POKEMONS } from "../../data/pokemon";
import { SELECT_CARDS } from "../actions/packScreen.action";


const initialState = {
    packs: POKEMONS,
    selected: null,
}

const PackScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CARDS:
            const IndexCard = state.packScreen.findIndex(card => card.id === action.pokemonId)
            if (IndexCard === -1) return state 
            return {...state,
                selected: state.packScreen[IndexCard]
            }
        default:
            return state
    }
} 

export default PackScreenReducer