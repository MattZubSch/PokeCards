import { CLEAR_PACK, MULTIPLE_CARDS, SELECT_CARDS, CREATE_CARDS } from "../actions/packScreen.action";
import Pokemon from "../../models/pokemon";

const initialState = {
    selected: [],
    openCards: [],
}
 
const PackScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CARDS:
            return {
                ...state,
                selected: action.pokeId,
            }
        case CLEAR_PACK:
            return {...state,
                selected: [],
                openCards: [],
                }
        case MULTIPLE_CARDS:
            const addCard = [...state.selected, action.pokeMultId]
            return {...state,
                selected: addCard
                }
        case CREATE_CARDS:
            const newPokemon = new Pokemon(
                action.payload.id,
                action.payload.name,
                action.payload.image,
                action.payload.types
            )
            return {
                ...state,
                openCards: state.openCards.concat(newPokemon)
            }
        default:
            return state
} 
}

export default PackScreenReducer