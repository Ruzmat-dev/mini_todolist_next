import { inctance } from "./inctance"

export const getData = async() => {
    try {
        const res = await inctance.get("/data")
        return res
    } catch (error) {
        console.log(error)
    }
}


export const postData = (data) => {
    try {
        const res =  inctance.post("http://localhost:5000/data", data)   
        return res
        
    } catch (error) {
        console.log(error)
    }
}
