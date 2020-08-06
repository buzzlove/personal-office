import React from "react";
import {Field, reduxForm} from "redux-form";

const AddContact = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h4>Добавить контакт</h4>
            </div>
            <div>
                <Field name={'name'} component={'input'} type={'text'} placeholder={'Введите имя'} />
            </div>
            <div>
                <Field name={'phone'} component={'input'} type={'tel'} placeholder={'Введите номер телефона'} />
            </div>
            <div>
                <Field name={'email'} component={'input'} type={'email'} placeholder={'Введите email'} />
            </div>
            <div>
                <button>Добавить</button>
            </div>
        </form>
    )
}

export default reduxForm ({form: 'addContact'})(AddContact);