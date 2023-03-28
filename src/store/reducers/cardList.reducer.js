import { CARDS_OBTAINED, SAVE_CARDS } from "../actions/cardList.action";
import Pokemon from "../../models/pokemon";

const initialState = {
    obtainedIds: [],
    obtainedCards: [],
}

const CardListReducer = (state = initialState, action) => {
    switch (action.type) {    
        case CARDS_OBTAINED:
            const addId = [...state.obtainedIds, action.cardIds]
            return {
                ...state,
                obtainedIds: addId
            }
        case SAVE_CARDS:
            const newPokemon = new Pokemon(
                action.payload.id,
                action.payload.name,
                action.payload.image,
                action.payload.types
            )
            return {
                ...state,
                obtainedCards: state.obtainedCards.concat(newPokemon)
            }
        default: 
            return state;
    }
}

export default CardListReducer