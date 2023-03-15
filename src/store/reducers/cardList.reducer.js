import { POKEMONS } from "../../data/pokemon";
import { PACK_OBTAINED, CARDS_OBTAINED } from "../actions/cardList.action";

const initialState = {
    cards: POKEMONS,
    obtainedCards: [],
    obtainedPack: []
}

const CardListReducer = (state = initialState, action) => {
    switch (action.type) {
        case PACK_OBTAINED:
            let colectorIds = state.obtainedPack
            
            // for (let i = 0; i < action.packIds.length; i++) {
            //     console.log(action.packIds[i])
            //     if (!colectorIds.includes(action.packIds[i]) === false) {
            //         colectorIds.push(action.packIds[i])
            //     }
            // }
            return {...state, obtainedPack: colectorIds}      
        case CARDS_OBTAINED:
        default:
            return state;
    }
}

export default CardListReducer