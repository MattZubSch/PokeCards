export const SELECT_CARDS = 'SELECT_CARDS'
export const MULTIPLE_CARDS = 'MULTIPLE_CARDS'
export const CLEAR_PACK = 'CLEAR_PACK'
export const CREATE_CARDS = 'CREATE_CARDS'

export const selectedCards = id => ({
    type: SELECT_CARDS,
    pokeId: id
})

export const multipleCards = id => ({
    type: MULTIPLE_CARDS,
    pokeMultId: id
})

export const clearPack = () => ({
    type: CLEAR_PACK
})

export const createCards = (id) => {
    return async (dispatch) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        if (!response.ok)
        throw new Error("No se ha podido conectar con el servidor");

        const resData = await response.json();
        console.log(resData.id)
        console.log(resData.name.toUpperCase())

        dispatch({
            type: CREATE_CARDS,
            payload: {
                id: resData.id,
                name: resData.name.toUpperCase(),
                image: resData.sprites.front_default,
                types: resData.types,
            }
        })
}}