import { URL_LOGIN_API, URL_AUTH_API } from "../../constants/Database";
import { Alert } from "react-native";

export const LOGIN = 'LOGIN'

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
        console.log(resData)
        
        if (!response.ok) {
            const errorID = resData.error.message;

            let message = 'No se ha podido iniciar la sesion'
            if (errorID === 'EMAIL_NOT_FOUND') message = 'El Email ingresado no corresponde a un usuario creado'

            if (errorID === 'INVALID_PASSWORD') message = 'La contraseña ingresada es incorrecta'

            throw new Error(message)
        }
  
        
  
        dispatch({
          type: LOGIN,
          token: resData.idToken,
          userId: resData.localId,
        })
      } catch (message) {
        return (
            Alert.alert(message, [{text: 'Reintentar'}])
        )
  
      }
    }
  }