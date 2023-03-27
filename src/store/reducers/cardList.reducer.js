import { POKEMONS } from "../../data/pokemon";
import { CARDS_OBTAINED } from "../actions/cardList.action";

const initialState = {
    cards: POKEMONS,
    obtainedCards: [],
}

const CardListReducer = (state = initialState, action) => {
    switch (action.type) {    
        case CARDS_OBTAINED:
            let pack = action.cardIds
            let colectedCards = state.obtainedCards
            pack.forEach(function(id) {
                if (!colectedCards.includes(id)) {
                    colectedCards.push(id)
                }
            })
            return {...state, obtainedCards: colectedCards}
        default: 
            return state;
    }
}

export default CardListReducer