import React from "react";

import {GET_DATA_REQ,GET_DATA_SUC,GET_DATA_FAIL, GET_HSCODE_REQ, GET_HSCODE_SUCC, GET_HSCODE_FAIL} from  "./action"
import { GET_EXDATA_REQ,GET_EXDATA_SUCC,GET_EXDATA_FAIL} from "./action";

const initstate={
    isLoading:false,
    isError:false,
    loggedInuser:null, 
    Data:[],
    users:[],
    Dataex:[],
    Hscode:[],
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
                    case GET_EXDATA_REQ:
                        return{
                            ...store,
                            isLoading:true,
                            isError:false,
                        }
                    case GET_EXDATA_SUCC:
                        return{
                            ...store,
                            isLoading:false,
                            isError:false,
                            Dataex:payload
                        }
                        case GET_EXDATA_FAIL:
                            return{
                                ...store,
                                isLoading:false,
                                isError:true
                            }
                            case GET_HSCODE_REQ:
                                return{
                                    ...store,
                                    isLoading:true,
                                    isError:false,
                                }
                                case GET_HSCODE_SUCC:
                                    return{
                                    ...store,
                                    isLoading:false,
                                    isError:false,
                                    Hscode:payload
                                    }
                                    case GET_HSCODE_FAIL:
                                        return{
                                            ...store,
                                                isLoading:false,
                                                isError:true,
                                            
                                        }

                    default:
                        return{
                            ...store
                        }
    }
}

export default reducer