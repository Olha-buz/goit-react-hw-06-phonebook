import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import css from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <li className={css.itemcontact}>
            <p className={css.pItem}>{contact.name}:{contact.number}</p>
            <button
                className={css.buttonremove}
                type="button"
                id={contact.name}
                onClick={handleDelete}>
                Delete
            </button>
        </li>
    )
};

ContactItem.propTypes = {
    contact: PropTypes.object,
}

export default ContactItem;