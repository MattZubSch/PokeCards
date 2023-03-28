export const CARDS_OBTAINED = 'CARDS_OBTAINED'
export const SAVE_CARDS = 'SAVE_CARDS'

export const cardsObtained = id => ({
    type: CARDS_OBTAINED,
    cardIds: id
}) 

export const saveCards = (id) => {
    return async (dispatch) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        if (!response.ok) {
            throw new Error("No se ha podido conectar con el servidor");
        }

        const resData = await response.json();
        console.log(resData.id)
        console.log(resData.name.toUpperCase())

        dispatch({
            type: SAVE_CARDS,
            payload: {
                id: resData.id,
                name: resData.name.toUpperCase(),
                image: resData.sprites.front_default,
                types: resData.types,
            }
        })
    } 
}