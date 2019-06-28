const authenticationReducer = (state = {isAuthenticated: false, token: ''}, action) => {
    switch(action.type) {
        case 'LOGIN':  
            return { ...state, isAuthenticated: true, token: 'xyz'};
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, token: ''};
        default:
            return state;
    }
};

export default authenticationReducer;