let initialState = {
    login: 'admin',
    password: '123',
    isAuth: false
}

const setLoginForm = '/AuthReducer/setLoginForm';

const AuthReducer = (state=initialState, action) => {
    switch(action.type){
        case '/AuthReducer/setLoginForm':
            return {...state, isAuth: action.authState};
        default :
            return state;
    }
}

const setLoginFormAC = (authState) => ({type: setLoginForm, authState});

export const checkLogin = (formData) => (dispatch) => {
    if(formData.login === initialState.login && formData.password === initialState.password){
       dispatch(setLoginFormAC(true));
    } else {dispatch(setLoginFormAC(false));}
}
export default AuthReducer;