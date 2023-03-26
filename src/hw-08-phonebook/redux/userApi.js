import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { getAuthToken, setAuthToken } from 'hw-08-phonebook/functions/authTokenHandle';

const BASE_URL = 'https://connections-api.herokuapp.com';
const API_ENDPOINT = '/users';

const transformAuthResponse=(response,meta,arg)=>{
    setAuthToken(response.token);
    return response.user;
}

export const userApi= createApi({
    reducerPath: 'user',
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
        checkUser:builder.query({
            query:()=>API_ENDPOINT+'/current',
            providesTags:['user']
        }),
        login:builder.mutation({
            query: (body)=>({
                url:API_ENDPOINT+'/login',
                method:"POST",
                body
            }),
            transformResponse:transformAuthResponse,
            invalidatesTags:['user']
        }),
        signup:builder.mutation({
            query: (body)=>({
                url:API_ENDPOINT+'/signup',
                method:"POST",
                body
            }),
            transformResponse:transformAuthResponse,
            invalidatesTags:['user']
        }),
        logout:builder.mutation({
            query: ()=>({
                url:API_ENDPOINT+'/logout',
                method:"POST"
            }),
            transformResponse:()=>{return null},
            invalidatesTags:['user']
        })
    })
})

export const {useLoginMutation,useLogoutMutation,useSignupMutation,useCheckUserQuery} = userApi;
export const userSelector=(state)=>(state);