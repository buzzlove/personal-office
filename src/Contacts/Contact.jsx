import React, {useState} from "react";
import EditFormLocal from "./EditFormLocal";

const Contact = ({contacts, deleteContactInStateAC, changeContactInfoAC}) => {
    let [editMode, setEditMode] = useState(false);
    let [currentId, setCurrentIndex] = useState();

    const toggleEditMode = (contactId) => {
        setCurrentIndex(+contactId.target.value);
        setEditMode(!editMode);
    };

    let deleteContact = (contactId) => {
        deleteContactInStateAC(+contactId.target.value);
    };
    const onSubmit = (localFormContact) => {
        changeContactInfoAC(localFormContact, currentId);
        setEditMode(false);
    }

    let contactListArrMapping = contacts.map((contact) => (
        <div key={contact.name}>
            {(editMode === true && contact.id === currentId) ?
                <EditFormLocal onSubmit={onSubmit}
                               contact={contact}
                               initialValues={contact}
                               />
                :
                <div>
                    <div>Имя:    {contact.name}</div>
                    <div>Телефон:{contact.phone}</div>
                    <div>Email:  {contact.email}</div>
                    <div>
                        <button onClick={toggleEditMode} value={contact.id}>Редактировать</button>
                        <button onClick={deleteContact} value={contact.id}>Удалить</button>
                    </div>
                </div>
            }
        </div>))

    return (
        <div>
            <div>
                <h4>Список контактов</h4>
            </div>
            <div>
                {contactListArrMapping}
            </div>
        </div>)
}

export default Contact;