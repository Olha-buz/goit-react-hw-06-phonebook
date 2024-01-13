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
        deleteContact: {
            reducer(state, action) {
                const index = state.findIndex(contact => contact.id === action.payload.id);
                state.splice(index, 1);
            },
            prepare(id) {
                return {
                    payload: {
                        id: id,
                    }
                }
            }
        },
    }
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
    