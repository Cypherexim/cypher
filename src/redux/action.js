import axios from "axios";

export const GET_DATA_REQ  = "GET_DATA_REQ";
export const GET_DATA_SUC = "GET_DATA_SUC";
export const GET_DATA_FAIL =  "GET_DATA_FAIL";

export const GET_EXDATA_REQ = "GET_EXDATA_REQ";
export const GET_EXDATA_SUCC = "GET_EXDATA_SUCC";
export const GET_EXDATA_FAIL = "GET_EXDATA_FAIL";

export const GET_HSCODE_REQ = "GET_HSCODE_REQ";
export const GET_HSCODE_SUCC = "GET_HSCODE_SUCC";
export const GET_HSCODE_FAIL = "GET_HSCODE_FAIL";



export const getdatarequest=()=>{
    return{
        type:GET_DATA_REQ
    }
}


export const getdatasuccess=(payload)=>{
    return{
        type:GET_DATA_SUC,
        payload
    }
}

export const getdatafail=(payload)=>{
    return{
        type:GET_DATA_FAIL,
        payload
    }
}

export const getexdatareq=()=>{
    return{
        type:GET_EXDATA_REQ
    }
}
export const getexdatasuccess=(payload)=>{
    return{
        type:GET_EXDATA_SUCC,
        payload
    }
}

export const getexdatafail=(payload)=>{
    return{
        type:GET_EXDATA_FAIL,
        payload
    }
}

export const gethscodereq = ()  =>{
    return {
        type:GET_HSCODE_REQ
    }
}
export const gethscodesuc =(payload) =>{
    return {
        type:GET_HSCODE_SUCC,
        payload
    }
}
export const gethscodefail=(payload) =>{
    return{
        type:GET_HSCODE_FAIL,
        payload
    }
}


export const Getdata =(data) =>{
    return(dispatch)=>{
        dispatch(getdatarequest());
        axios({url:`http://ec2-54-210-2-244.compute-1.amazonaws.com:8080/user/getImports`,params:data}).then(res=>dispatch(getdatasuccess(res.data)))
        .catch(err=>dispatch(getdatafail(err)))
        }   
    }

    
    export const Getexdata=(dataex)=>{
        return(dispatch)=>{
            dispatch(getexdatareq());
            axios({url:`http://ec2-54-210-2-244.compute-1.amazonaws.com:8080/user/getExports`,params:dataex}).then(res=>dispatch(getexdatasuccess(res.data)))
            .catch(err=>dispatch(getexdatafail(err)))
        }

    }
export const Gethsdata=(hsdata)=>{
    return(dispatch)=>{
        dispatch(gethscodereq());
        axios(`http://ec2-54-210-2-244.compute-1.amazonaws.com:8080/user/gethscode?hscodefor=export`).then(res=>dispatch(gethscodesuc(res.data)))
        .catch(err=>dispatch(gethscodefail(err)))
    }
}