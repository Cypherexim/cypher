import axios from "axios";

export const GET_DATA_REQ  = "GET_DATA_REQ";
export const GET_DATA_SUC = "GET_DATA_SUC";
export const GET_DATA_FAIL =  "GET_DATA_FAIL";





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

export const Getdata =() =>{
    return(dispatch)=>{
        dispatch(getdatarequest());
        axios(`http://ec2-54-210-2-244.compute-1.amazonaws.com:8080/user/getExports?EXPORTER_NAME=EXPORTS&Importer_Name=HYPER&HSCodeDesc=FRUITS&HSCODE=10&toDate=2022-09-01&fromDate=2022-01-01`).then(res=>dispatch(getdatasuccess(res.data)))
        .catch(err=>dispatch(getdatafail(err)))
        }   
    }
    
