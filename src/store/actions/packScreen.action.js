export const SELECT_CARDS = 'SELECT_CARDS'


export const selectedCards = id => ({
    type: SELECT_CARDS,
    pokemonId: id
})