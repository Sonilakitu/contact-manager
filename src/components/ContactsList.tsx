import React, { useState } from 'react';
import Contact from '../models/Contact';
import { connect } from 'react-redux';
import { addContact, deleteContact } from '../redux/reducer';
import ContactForm from './ContactForm';
import { bindActionCreators } from 'redux';
import ContactCard from './ContactCard';

const mapStateToProps = (state: any) => {
    return state;
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        addContact: (obj: Contact) => dispatch(addContact(obj)),
        deleteContact: (id: number) => dispatch(deleteContact(id)),
    }, dispatch)
}

function ContactsList(props: any) {
    const [showPopup, setShowPopup] = useState(false);

    /**
     * @description on Click of addContact Button the popup will be shown
     */
    const handleAddContactClick = () => {
        setShowPopup(true);
    }

    /**
     * @description On Click submitting the form the popup will be closed
     */
    const handleClosePopup = () => {
        setShowPopup(false);
    }


    const handleDeleteContact = (id: number) => {
        props.deleteContact(id)
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Contacts</h1>
                <button className="w-200 h-100 bg-gray-800 text-white text-lg font-bold px-4 py-4" onClick={handleAddContactClick}>Create Contact</button>
                {showPopup && <ContactForm onClose={handleClosePopup} />}
                <div className="mt-4">
                    {props.contacts.length > 0 ? (
                        <ul className="space-y-4">
                            {props.contacts.map((contact: Contact) => (
                                <li key={contact.id}>
                                    <ContactCard
                                        id={contact.id}
                                        firstName={contact.firstName}
                                        lastName={contact.lastName}
                                        active={contact.status}
                                        onEdit={() => console.log('Edit clicked')}
                                        onDelete={() => handleDeleteContact(contact.id)}
                                    />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center bg-red-700 text-white text-lg font-bold p-4">
                            <p className="mb-2">No contacts found. Please add contact from Create Contact button.</p>
                            </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);



