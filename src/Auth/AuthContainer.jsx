import React from "react";
import {connect} from "react-redux";
import Auth from "./Auth";
import {checkLogin} from "../Redux/AuthReducer";



const AuthContainer = ({checkLogin}) => {
    const onSubmit = (formData) => {
        checkLogin(formData);
    }

    return(
    <div>
        <div>
            <h1>Авторизация</h1>
        </div>
        <div>
            <Auth onSubmit={onSubmit}/>
        </div>

    </div>)
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth
    }
}

export default connect(mapStateToProps,{checkLogin})(AuthContainer);