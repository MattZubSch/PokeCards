import { POKEMONS } from "../../data/pokemon";
import { SELECT_CARDS, MULTIPLE_CARDS, CLEAR_PACK } from "../actions/packScreen.action";


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