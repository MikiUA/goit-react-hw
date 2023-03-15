import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://640d9283b07afc3b0db06bfb.mockapi.io';
const API_ENDPOINT = '/contacts';

export const contactsApi= createApi({
    reducerPath: 'contacts',
    baseQuery:fetchBaseQuery({
        baseUrl: BASE_URL
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
                method:"PUT",
                body
            }),
            invalidatesTags:['contacts']
        })
    })
})

export const {useGetContactsQuery,useAddContactMutation,useEditContactMutation,useDeleteContactMutation} = contactsApi;