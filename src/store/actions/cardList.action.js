import { insertCard, fetchPokes } from "../../db"
import { URL_API } from "../../constants/Database"
export const CARDS_OBTAINED = 'CARDS_OBTAINED'
export const SAVE_CARDS = 'SAVE_CARDS'
export const LOAD_CARDS = 'LOAD_CARDS'



export const cardsObtained = id => ({
    type: CARDS_OBTAINED,
    cardIds: id
}) 

export const saveCards = (id) => {
    return async (dispatch) => {
        try{

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    
            if (!response.ok) {
                throw new Error("No se ha conectar con el servidor");
            }
    
            
            
            const resData = await response.json();
            
            const ids = resData.id;
            const name = resData.name.toUpperCase();
            const image = resData.sprites.front_default;
            const types = resData.types[0].type.name;
            
            console.log(types)

            const result = await insertCard(
                ids,
                name,
                image,
                types
            )
        try{
            const load = await fetch(`${URL_API}cards.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify({
                    ids,
                    name,
                    image,
                    types
                })
            })

            const loaded = await load.json()
            console.log(loaded)
        } catch (err) {
            throw err
        }


    
            console.log(result)
            dispatch({
                type: SAVE_CARDS,
                payload: {
                    ord: result.insertId,
                    ids,
                    name,
                    image,
                    types
                }
            }) 
        } catch (err) {
            throw err
        }
    } 
}

export const loadCards = () => {
    return async (dispatch) => {
      try{
        const result = await fetchPokes()
        console.log(result.rows._array)
        dispatch({type: LOAD_CARDS, payload: result.rows._array})
      } catch (err) {
        throw err
      }
    }
  }
