import axios from "axios"

export const Api = axios.create({
    baseURL:'https://3f08-102-134-149-149.in.ngrok.io',
    responseType:'json'
})