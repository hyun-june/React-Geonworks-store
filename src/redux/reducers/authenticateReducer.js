let initialState = {
    id: '',
    password: '',
    authenticate: false
}

function authenciateReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "LOGIN_SUCCESS":
            return { ...state, id: payload.id, password: payload.password, authenticate: true };
        case "LOGOUT_SUCCESS":
            return { ...state, authenticate: false };
        default:
            return { ...state };
    }
}

export default authenciateReducer;
