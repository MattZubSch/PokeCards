export const CARDS_OBTAINED = 'CARDS_OBTAINED'


export const cardsObtained = id => ({
    type: CARDS_OBTAINED,
    cardIds: id
}) 