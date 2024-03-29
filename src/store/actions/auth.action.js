import { URL_AUTH_API } from "../../constants/Database";
import { insertUserId } from "../../db";

export const SIGNUP = "SIGNUP"

export const signUp = (email, password) => {
  console.log(email, password)
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_API, {
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
      
        let message = 'No se ha podido completar el registro';
        if (errorID === 'EMAIL_EXISTS') message = "Este Email ya esta registrado";
      }

      const token = resData.idToken;
      const userId = resData.localId;

      const result = await insertUserId(
        userId,
        token 
      )
      console.log(result)
      
      dispatch({
        type: SIGNUP,
        token: resData.idToken,
        userId: resData.localId,
      })
    } catch (error) {
      console.log(error)

    }
  }
}