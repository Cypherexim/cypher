import React from "react";

import {GET_DATA_REQ,GET_DATA_SUC,GET_DATA_FAIL} from  "./action"

const initstate={
    isLoading:false,
    isError:false,
    loggedInuser:null, 
    Data:[],
    users:[],
    
}

function reducer(store = initstate,action) {
    const {type,payload} =action
    switch(type){
        case GET_DATA_REQ :
            return{
                ...store,
                isLoading:true,
                isError:false,
            }
            case GET_DATA_SUC:
                return{
                    ...store,
                    isLoading:false,
                    isError:false,
                    Data:payload
                }
                case GET_DATA_FAIL :
                    return{
                        ...store,
                        isLoading:false,
                        isError:true
                    }
                    case "REGISTER":
                        return{
                            ...store,
                            users :[...store.users,action.payload]
                        }

                    default:
                        return{
                            ...store
                        }
    }
}

export default reducer