import React from 'react';
import './App.css';
import AuthContainer from "./Auth/AuthContainer";
import {connect} from "react-redux";
import ContactsContainer from "./Contacts/ContactsContainer";

function App({isAuth}) {
    return (
        <div className="App">
            {!isAuth ? <AuthContainer/> : <ContactsContainer/>}
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth
    }
}
export default connect(mapStateToProps)(App);
