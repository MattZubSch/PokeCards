import { CLEAR_PACK, MULTIPLE_CARDS, SELECT_CARDS } from "../actions/packScreen.action";

import { POKEMONS } from "../../data/pokemon";

const initialState = {
    packs: POKEMONS,
    selected: [],
}
 
const PackScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CARDS:
            const IndexCard = state.packs.findIndex(card => card.id === action.pokemonId)
            if (IndexCard === -1) return state 
            return {...state,
                selected: state.packs[IndexCard]
                }
        case CLEAR_PACK:
            return {...state,
                selected: []
                }
        case MULTIPLE_CARDS:
            const IndexCards = state.packs.findIndex(card => card.id === action.pokeMultId)
            if (IndexCard === -1) return state 
            const addCard = [...state.selected, state.packs[IndexCards]]
            return {...state,
                selected: addCard
                }
        default:
            return state
} 
}

export default PackScreenReducer