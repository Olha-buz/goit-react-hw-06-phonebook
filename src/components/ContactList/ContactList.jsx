
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'store/selectors';
import PropTypes from 'prop-types';
import { deleteContact } from 'store/contactSlice';


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    
    
    console.log(contacts);
    
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
 
    // console.log(filteredContacts);
    // console.log(filter);

    const handleDelete = ((contact) => {
        // console.log(contact);
        dispatch(deleteContact(contact.id));

    });
    return (
        <ul className={css.contacts}>
            {filteredContacts.map(contact => {
                return (
                    <li className={css.itemcontact} key={contact.id} >
                        <p className={css.pItem}>{contact.name}: {contact.number}</p>
                        <button
                            className={css.buttonremove}
                            type="button"
                            id={contact.name}
                            onClick={handleDelete}>
                            Delete
                        </button>
                    </li>
                )
            })}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.object,
    filter: PropTypes.string,
};
