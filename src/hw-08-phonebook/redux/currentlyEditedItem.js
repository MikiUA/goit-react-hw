import { createAction } from "@reduxjs/toolkit";

export const name='contactFormItem'

export const addContact=createAction(name+'/addItem');
export const editContact=createAction(name+'/editItem');
export const cancelEdit=createAction(name+'/resetItem');

const initialState=null;
const newItem = (payload)=>{
    return {
        name:'',
        number:''
    }
}
const editedItem = (payload)=>{
    if (!payload || !payload.id || !payload.name || !payload.number) return null
    return {id:payload.id,name:payload.name,number:payload.number}
}

export function reducer(item=initialState,action){
    // console.log('action',action)//by the way also logs every other action en every connected reducer
    console.log("on the item ",item,"\n we will do ",action)
    switch (action.type){
        case (addContact.type):{
            return  newItem()
        }
        case (editContact.type):{
            return editedItem(action.payload)||null
        }
        case (cancelEdit.type):{
            return null
        }
        default: return item;
    }
}