import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Contact from '../models/Contact';
import { connect } from 'react-redux';
import { addContact } from '../redux/reducer';


type ContactFormProps = {
    onClose: () => void;
    addContact: (contact: Contact) => void;
}

/**
 * @description Will use the redux store to add the contact 
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: any) => {
    return {
        addContact: (obj: Contact) => dispatch(addContact(obj))
    }
}

const ContactForm: React.FC<ContactFormProps> = (props) => {
    const [firstName, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [status, setStatus] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newContact: Contact = {
            id: Date.now() + Math.floor(Math.random() * 100_000), // generate a random ID
            firstName,
            lastName,
            status,
        };
        props.addContact(newContact)
        setName('');
        setLastName('');
        setStatus(false);
        props.onClose();
    };

    return (

        <div>
            (<form onSubmit={handleSubmit} className="bg-white p-20 rounded-lg shadow-xl  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="mb-4 flex justify-between">
                    <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2 w-1/3">
                        First Name:
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4 flex justify-between">
                    <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2 w-1/3">
                        Last Name:
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4 flex justify-between">
                    <label htmlFor="status" className="block text-gray-700 font-bold mb-2 w-1/3">
                        Status:
                    </label>
                    <div className="flex w-2/3 items-center">
                        <label htmlFor="status-active" className="mr-2">
                            <input
                                type="radio"
                                id="status-active"
                                checked={!!status}
                                value="true"
                                onChange={(e) => setStatus(e.target.value === "true")}
                                className="form-radio"
                            />
                            Active
                        </label>
                        <label htmlFor="status-inactive">
                            <input
                                type="radio"
                                id="status-inactive"
                                checked={!status}
                                value="false"
                                onChange={(e) => setStatus(e.target.value === "true")}
                                className="form-radio"
                            />
                            Inactive
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-2  focus:outline-none focus:shadow-outline"
                >
                    Create Contact
                </button>
                <button
                    onClick={() => props.onClose()}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
                >
                    Close Page
                </button>

            </form>)
        </div>
    );
};

export default connect(null, mapDispatchToProps)(ContactForm)
