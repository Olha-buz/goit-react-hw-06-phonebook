import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { addFilter } from 'redux/filterSlice';

const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = evt => {
        evt.preventDefault();
        const name = evt.target.value;
        dispatch(addFilter(name));
    };

    return (
        <>
            <label className={css.filter}>
                Find contacts by name:
                <input
                    className={css.inputfilter}
                    type="text"
                    onChange={handleChange}
                />
            </label>
        </>
    );
};

export default Filter;