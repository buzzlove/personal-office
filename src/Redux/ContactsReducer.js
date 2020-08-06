const addContactToState = '/ContactsReducer/addContactToState';
const deleteContactInState =  '/ContactsReducer/deleteContactInState';
const searchContactInState = '/ContactsReducer/searchContactInState';
const changeContactInfo = '/ContactsReducer/changeContactInfo';

let initialState = {
    contactsList: [
        {
            name: "Andrey",
            phone: '+79542568974',
            email: 'andrey@mail.ru',
            id: 0
        },
        {
            name: "Илья",
            phone: '89500054321',
            email: 'ilay@mail.ru',
            id: 1
        },
        {
            name: "Дмитрий",
            phone: '89567854321',
            email: 'dmitriy@mail.ru',
            id: 2
        },

    ],
    filterContactList: [],

}

const ContactsReducer = (state=initialState, action) => {
    switch (action.type){
        case '/ContactsReducer/addContactToState':
            let lastValue = state.contactsList[state.contactsList.length-1].id;
            return {...state, contactsList: [...state.contactsList, {
                    name: action.newContact.name,
                    phone: action.newContact.phone,
                    email: action.newContact.email,
                    id: lastValue + 1
                }]};
        case '/ContactsReducer/deleteContactInState':
            return {...state,
                            contactsList: [...state.contactsList.filter(
                                (item) => (item.id !== action.contactId))],
                            filterContactList: [...state.filterContactList.filter(
                                 (item) => (item.id !== action.contactId))],

            };
        case '/ContactsReducer/searchContactInState':
            return { ...state,
                filterContactList: [...state.contactsList.filter(item =>
                   (item.name.toLowerCase().indexOf(action.textSearch.toLowerCase()) !== -1)

                   )]};
        case '/ContactsReducer/changeContactInfo':
            return {...state,
                contactsList: [...state.contactsList.map((contact) => (contact.id === action.contactId) ? (
                    action.newContactForm ): contact)],
                filterContactList: [...state.filterContactList.map((contact) => (contact.id === action.contactId) ? (
                   action.newContactForm ): contact)]}
        default:
            return state;
    }
}

export const addContactToStateAC = (newContact) => ({type: addContactToState, newContact});
export const deleteContactInStateAC = (contactId) => ({type: deleteContactInState, contactId});
export const searchContactInStateAC = (textSearch) => ({type: searchContactInState, textSearch});
export const changeContactInfoAC = (newContactForm, contactId) => ({type: changeContactInfo, newContactForm, contactId});

export default ContactsReducer;
