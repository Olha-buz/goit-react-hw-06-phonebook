import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import PropTypes from 'prop-types';


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) !== -1
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
    filter: PropTypes.string,
};
