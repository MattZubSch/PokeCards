export const PACK_OBTAINED = 'PACK_OBTAINED'
export const CARDS_OBTAINED = 'CARDS_OBTAINED'

export const packObtained = id => ({
    type: PACK_OBTAINED,
    packIds: id
})

export const cardsObtained = id => ({
    type: CARDS_OBTAINED,
    cardIds: id
}) 