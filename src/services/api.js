
import axios from 'axios'

import { SERVICE_URLS } from '../constants/config'


const API_URL='http://localhost:8000'

const axiosInstance=axios.create({
    baseURL:API_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json"
    }
})

axiosInstance.interceptors.request.use(
    function(config){
      // do something before request is sent.


       return config;

    },
    function(error){

     // do something with request error.

        return Promise.reject(error)
    }

)


axiosInstance.interceptors.response.use(
    function(response){
     //Any status code that lies within the range of 2XX cause this function to trigger.
     //do  something with the response data.



     return processResponse(response)
    },
    function(error){

        //Any status code that lies out of range of 2XX cause this function to trigger.
        //do something with the response error.

        return Promise.reject(processError(error))
    }

)


const processResponse=(response)=>{
    if(response?.status===200){
        return {isSuccess:true,data:response.data}
    }
    else{
        return{
            isSuccess:false,
            status:response?.status,
            msg:response?.msg,
            code:response?.code
        }
    }
}


const processFailure=(error)=>{
    if(error.response){
        //server responded with a ststus code other than 2XX.


        console.error('response error:',error.response.status,error.response.data)
    }
    else if(error.request){

        //no response received from the server.
        console.error('No response received:',error.request)
    }
    else{
        //error setting up the request.

        console.error('request setup error:',error.message)
    }
}

const API={}


for (const[key,value] of Object.entries(SERVICE_URLS)){
    API[key]=(body,showUploadProgress,showDownloadProgress)=>{
        axiosInstance({
            method:value.method,
            url:value.url,
            data:body,
            responseType:value.responseType,
            
        })
    }
}

export {API}

