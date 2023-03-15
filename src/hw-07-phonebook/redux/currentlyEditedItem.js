import { createAction } from "@reduxjs/toolkit";

export const name='currentlyEditedItem'

export const selectItem=createAction(name+'/selectItem');
export const resetItem=createAction(name+'/resetItem');

export function reducer(itemID=null,action){
    console.log('action',action)
    switch (action.type){
        case (selectItem.type):{
            return action.payload
        }
        case (resetItem.type):{
            return null
        }
        default: return itemID;
    }
}