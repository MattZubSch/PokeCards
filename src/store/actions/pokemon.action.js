export const POKEMON = 'POKEMON'

export const pokes = ([id]) => ({
    type: POKEMON,
    pokes: [id]
})