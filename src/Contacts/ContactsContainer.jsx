import React, { useState} from "react";
import {connect} from "react-redux";
import Contact from "./Contact";
import AddContact from "./AddContact";
import {
    addContactToStateAC,
    changeContactInfoAC,
    deleteContactInStateAC,
    searchContactInStateAC
} from "../Redux/ContactsReducer";
import './../App.css';

const ContactsContainer = ({   contacts,
                               addContactToStateAC,
                               deleteContactInStateAC,
                               searchContactInStateAC,
                               changeContactInfoAC,
                               filterContactList,
                               }) => {

    let [editMode, setEditMode] = useState(false);
    let [searchName, setSearchName] = useState('');

    let currentContacts;
    !searchName ? currentContacts = contacts : currentContacts = filterContactList;

    const onSubmit = (contactForm) => {
        addContactToStateAC(contactForm);
        setEditMode(false);
    }
    const toggleEditMode = () => {
       setEditMode(!editMode);
    }
    const setSearchNameInState = (value) => {
        setSearchName(value.target.value);
        searchContactInStateAC(value.target.value);
    }

    return (
    <div>
        <div className={'header'}>
            <header>
                <h1>Записная книжка</h1>
            </header>
            <div>
                <input name={'search'} type={'text'} placeholder={'Введите имя для поиска'}
                       value={searchName} onChange={setSearchNameInState}/>
                <button onClick={toggleEditMode}>+</button>

            </div>
        </div>
            <div className={'mainContent'}>
                 {!editMode ? <Contact contacts={currentContacts}
                                       deleteContactInStateAC={deleteContactInStateAC}
                                       changeContactInfoAC={changeContactInfoAC}
                                       searchName={searchName}
                                       searchContactInStateAC={searchContactInStateAC}
                     />
                            :  <AddContact onSubmit={onSubmit}/>
                 }
            </div>
    </div>)
}

let mapStateToProps = (state) => {
    return {
        contacts: state.Contacts.contactsList,
        filterContactList: state.Contacts.filterContactList
    }
}

export default connect(mapStateToProps,{addContactToStateAC,
                                        deleteContactInStateAC,
                                        searchContactInStateAC,
                                        changeContactInfoAC,

                                        })(ContactsContainer);