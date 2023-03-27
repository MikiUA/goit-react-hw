import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { getAuthToken } from 'hw-08-phonebook/functions/authTokenHandle';

const BASE_URL = 'https://connections-api.herokuapp.com';
const API_ENDPOINT = '/contacts';

export const contactsApi= createApi({
    reducerPath: 'contacts',
    baseQuery:fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders:(headers)=>{
            const token=getAuthToken();
            if (token){
                headers.set('authorization',`Bearer ${token}`);
                return headers;
            }
        }
    }),
    tagTypes: ['contacts'],
    endpoints: (builder)=>({
        getContacts:builder.query({
            query:()=>API_ENDPOINT,
            providesTags:['contacts']
        }),
        addContact:builder.mutation({
            query: (body)=>({
                url:API_ENDPOINT,
                method:"POST",
                body
            }),
            invalidatesTags:['contacts']
        }),
        deleteContact:builder.mutation({
            query: ({id})=>({
                url:API_ENDPOINT+'/'+id,
                method:"DELETE"
            }),
            invalidatesTags:['contacts']
        }),
        editContact:builder.mutation({
            query: ({id,...body})=>({
                url:API_ENDPOINT+'/'+id,
                method:"PATCH",
                body
            }),
            invalidatesTags:['contacts']
        })
    })
})

export const {useGetContactsQuery,useAddContactMutation,useEditContactMutation,useDeleteContactMutation} = contactsApi;