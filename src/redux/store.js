import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedContacts = persistReducer(persistConfig, contactReducer);


export const store = configureStore({
    reducer: {
        contacts: persistedContacts,
        filter: filterReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    }
});

export const persistor = persistStore(store);
