import axios from "axios"

export const Api = axios.create({
    baseURL:'https://notes-backend.onrender.com',
})