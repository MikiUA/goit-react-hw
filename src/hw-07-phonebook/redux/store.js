const { configureStore } = require("@reduxjs/toolkit");

const { contactsApi } = require("./commentsApi");
const {name,reducer }= require("./currentlyEditedItem");

export const store = configureStore({
    reducer:{
        [contactsApi.reducerPath]:contactsApi.reducer,
        [name]:reducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        contactsApi.middleware
    ]
})