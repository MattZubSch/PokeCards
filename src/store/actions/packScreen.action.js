export const SELECT_CARDS = 'SELECT_CARDS'
export const MULTIPLE_CARDS = 'MULTIPLE_CARDS'
export const CLEAR_PACK = 'CLEAR_PACK'

export const selectedCards = id => ({
    type: SELECT_CARDS,
    pokemonId: id
})

export const multipleCards = id => ({
    type: MULTIPLE_CARDS,
    pokeMultId: id
})

export const clearPack = () => ({
    type: CLEAR_PACK
})