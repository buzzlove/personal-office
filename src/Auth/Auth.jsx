import React from "react";
import {Field, reduxForm} from "redux-form";

const renderField = ({ input, label, type, meta: { touched, error} }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <div>{error}</div>))}
        </div>
    </div>
)
const validate = values => {
    const errors = {}
    if (!values.login) {
        errors.login = 'Обязательно для заполнения'
    } else if (values.login.length > 15) {
        errors.login = 'Максимум 15 символов'
    }
    if (!values.password) {
        errors.password = 'Обязательно для заполнения'
    }

    return errors;
}


const Auth = ({handleSubmit, submitting}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field name={'login'} component={renderField} type={'text'} placeholder={'Введите имя пользователя'}/>
        </div>
        <div>
            <Field name={'password'} component={renderField} type={'password'} placeholder={'Введите пароль'}/>
        </div>
        <div>
            <button type="submit" disabled={submitting}>Войти</button>
        </div>

    </form>
}



export default reduxForm({form: 'AuthForm', validate})(Auth);