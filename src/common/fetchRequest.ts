import axios from 'axios'
import 'dotenv/config'

export const getRequest = async (url: string, params:any = {})=>{
    try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API}${url}`, {
            params
        })

        return res.data
    } catch (err: any) {
        const { data, status } = err.response
        throw {message: data.message, status}
    }
}

export const postRequest = async (url: string, payload:any = {})=>{
    try{
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API}${url}`, payload)

        return res.data
    } catch (err: any) {
        const { data, status } = err.response
        throw {message: data.message, status}
    }
}

export const putRequest = async (url: string, payload: any = {})=>{
    try{
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API}${url}`, payload)

        return res.data
    } catch (err: any) {
        const { data, status } = err.response
        throw {message: data.message, status}
    }
}

export const deleteRequest = async (url: string)=>{
    try{
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_API}${url}`)

        return res.data
    } catch (err: any) {
        const { data, status } = err.response
        throw {message: data.message, status}
    }
}