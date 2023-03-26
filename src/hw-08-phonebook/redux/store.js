const { configureStore } = require("@reduxjs/toolkit");

const { contactsApi } = require("./contactsApi");
const { userApi } = require("./userApi");
const {name,reducer }= require("./currentlyEditedItem");

console.log(contactsApi,userApi);
export const store = configureStore({
    reducer:{
        [contactsApi.reducerPath]:contactsApi.reducer,
        [userApi.reducerPath]:userApi.reducer,
        [name]:reducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
        userApi.middleware
    ]
})