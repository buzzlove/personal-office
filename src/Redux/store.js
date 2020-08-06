import {applyMiddleware, combineReducers, createStore} from "redux";
import ContactsReducer from "./ContactsReducer";
import AuthReducer from "./AuthReducer";
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    Auth: AuthReducer,
    Contacts: ContactsReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;