import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import PropTypes from 'prop-types';


const ContactList = () => {
    const contacts = useSelector(getContacts);
    const { input } = useSelector(getFilter);

    if (!contacts) return null;

    const filteredContacts = contacts.value.filter(contact =>
        contact.name.toLowerCase().includes(input.toLowerCase())
    );

    return (
        <ul className={css.contacts}>
            {filteredContacts.map(({ contact }) => (
                <ContactItem contact={contact} />
            ))}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.object,
    input: PropTypes.string,
};

export default ContactList;