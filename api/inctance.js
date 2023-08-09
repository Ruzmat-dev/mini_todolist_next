import axios from "axios";

export const inctance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})