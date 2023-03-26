import { LOGIN } from "../actions/login.action";

const initialState = {
    token: null,
    userId: null
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: 
        return {
            ...state,
            token: action.token,
            userId: action.userId
          } 
        default:
            return state
    }
}

export default LoginReducer