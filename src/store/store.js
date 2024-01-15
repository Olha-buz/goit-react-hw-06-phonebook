import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
};

const rootReducers = combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
})

const persistedContacts = persistReducer(persistConfig, rootReducers);


export const store = configureStore({
    reducer: persistedContacts,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    }
});

export const persistor = persistStore(store);
