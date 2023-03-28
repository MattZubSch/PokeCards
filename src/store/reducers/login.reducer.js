import { LOGIN, LOAD_USER } from "../actions/login.action";

const initialState = {
    userId: null,
    token: null,
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: 
        return {
            ...state,
            userId: action.payload.userId,
            token: action.payload.token,
          } 
        case LOAD_USER:
            if (action.payload.length === 0) {
                return state
            }
            const id = action.payload.map(item => item.userId)
            const tok = action.payload.map(item => item.token) 
            return {
                ...state,
                userId: id,
                token: tok,
            }
        default:
            return state
    }
}

export default LoginReducer