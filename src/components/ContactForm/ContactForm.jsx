import Notiflix from 'notiflix';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';
import PropTypes from 'prop-types';

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        form.reset();
        if (contacts.value.find(contact => contact.name === name)) {
            Notiflix.Notify.info(`${name} is already in contacts`);
            return;
        };
        dispatch(addContact(name, number));
    }

    return (
        <form className={css.formcontact} onSubmit={handleSubmit} autoComplete='off'>
            <label >
                <div >
                    Name
                </div>
                <input
                    className={css.inputform}
                    type="text"
                    name="name"
                    required
                />
            </label>
            <label >
                <div >
                    Number
                </div>
                <input
                    className={css.inputform}
                    type="tel"
                    name="number"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    title="The phone number in the form 000-00-00."
                    required

                />
            </label>
            <button className={css.button} type='submit'>Add contact</button>
        </form>
    );
};

ContactForm.propTypes = {
    contacts: PropTypes.object
};

export default ContactForm;
