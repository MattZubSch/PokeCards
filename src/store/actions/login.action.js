import { URL_LOGIN_API, URL_AUTH_API } from "../../constants/Database";
import { Alert } from "react-native";
import { insertUserId, fetchUserId } from "../../db";

export const LOGIN = 'LOGIN'
export const LOAD_USER = 'LOAD_USER'

export const logIn = (email, password) => {
    console.log(email, password)
    return async (dispatch) => {
      try {
        const response = await fetch(URL_LOGIN_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        })
  
        const resData = await response.json()
        
        if (!response.ok) {
            const errorID = resData.error.message;

            let message = 'No se ha podido iniciar la sesion'
            if (errorID === 'EMAIL_NOT_FOUND') message = 'El Email ingresado no corresponde a un usuario creado'

            if (errorID === 'INVALID_PASSWORD') message = 'La contraseña ingresada es incorrecta'

            throw new Error(message)
        }
  
      const token = resData.idToken;

      const userId = resData.localId;

      const result = await insertUserId(
        userId,
        token 
      )
      console.log(result)
  
        dispatch({
          type: LOGIN,
          payload: {id: result.insertId, userId, token}
        })
      } catch (message) {
        return (
            Alert.alert(message, [{text: 'Reintentar'}])
        )
  
      }
    }
  }

export const loadUser = () => {
  return async (dispatch) => {
    try{
      const result = await fetchUserId()
      console.log(result)
      dispatch({type: LOAD_USER, payload: result.rows._array})
    } catch (err) {
      throw err
    }
  }
}