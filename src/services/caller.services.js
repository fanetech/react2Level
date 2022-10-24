import axios from "axios";
import { accountService } from "./account.services";

const Axios = axios.create({
    baseURL: 'http://localhost:5000'
})


// token interceptor

Axios.interceptors.request.use(request => {
    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer ' + accountService.getToken()
    }
    return request
}) 

export default Axios