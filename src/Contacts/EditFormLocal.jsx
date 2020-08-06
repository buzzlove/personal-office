import React from "react";
import {Field, reduxForm} from "redux-form";

const EditFormLocal = ({handleSubmit, contact}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h4>Редкатировать контакт</h4>
            </div>
            <div>
                <Field name={'name'} component={'input'} type={'text'} placeholder={contact.name} />
            </div>
            <div>
                <Field name={'phone'} component={'input'} type={'tel'} placeholder={contact.phone} />
            </div>
            <div>
                <Field name={'email'} component={'input'} type={'email'} placeholder={contact.email} />
            </div>
            <div>
                <button>Обновить</button>
            </div>
        </form>
    )
}

export default reduxForm ({form: 'editFormLocal'})(EditFormLocal);