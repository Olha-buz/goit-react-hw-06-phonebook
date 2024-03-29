import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const allInitialState =  [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

const contactSlice = createSlice({
    name: 'contacts',
    initialState: allInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            }
        },
        deleteContact: (state, action) => {
            console.log(state);
            console.log(action.payload);
            // const index = state.findIndex(contact => contact.id === action.payload);
            // console.log(index);
            // state.splice(index, 1);
            const newArr = state.filter((contact) => contact.id !== action.payload);
            console.log(newArr);
            return newArr;
            },
    }
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
    