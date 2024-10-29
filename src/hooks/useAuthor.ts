import React, { useState, useReducer } from 'react'
import toast from 'react-hot-toast'

import { getRequest, postRequest, deleteRequest, putRequest } from '@/common/fetchRequest'
import { isKeyInObj } from '@/common/check'
import { AuthorFilter, AuhtorFilterAction, Author, AuthorState, AuthorAction } from '@/ts/types'

import { initFilter, filterReducer, initAuthors, authorReducer } from '@/reducers/authorReducer'

const useAuthor = () =>{
    const [loading, setLoading] = useState<boolean>(false)
    const [filter, dispatchFilter] = useReducer<(state: AuthorFilter, action: AuhtorFilterAction) => AuthorFilter>(filterReducer, initFilter)
    const [authors, dispatchAuthor] = useReducer<React.Reducer<AuthorState, AuthorAction>>(authorReducer, initAuthors)

    const fetchAuthor = async() =>{
        try{
            setLoading(true)
            const res = await getRequest('/authors', {...filter})
            dispatchAuthor({type: 'SET_AUTHOR', payload: res})
        } catch(err: any){
            toast.error(err.message)
        } finally{
            setLoading(false)
        }
    }

    const createAuthor = async(payload: Pick<Author, 'name'>) =>{
        try{
            setLoading(true)
            isKeyInObj('name', payload, 'Nama author diperlukan')
            const res = await postRequest('/author', payload)
            console.log(res)
            dispatchAuthor({type: 'ADD_AUTHOR', payload: res})
        } catch(err: any){
            console.log(err)
            throw err
        } finally{
            setLoading(false)
        }
    }

    const updateAuthor = async(payload: Author)=>{
        try{
            setLoading(true)
            console.log(payload)
            await putRequest(`/author/${payload.id}`, { name: payload.name})
            dispatchAuthor({type: 'UPDATE_AUTHOR', payload})

            toast.success('Author berhasil diperbarui')
        } catch(err: any){
            toast.error(err.message)
        } finally{
            setLoading(false)
        }
    }

    const deleteAuthor = async(payload: Author) =>{
        try{
            setLoading(true)
            const id = payload.id
            await deleteRequest(`/author/${id}`)
            dispatchAuthor({type: 'REMOVE_AUTHOR', payload})

            toast.success('Author berhasil dihapus')
        } catch(err: any){
            console.log(err)
            toast.error(err.message)
        } finally{
            setLoading(false)
        }
    }

    return {
        loading, filter, authors,
        fetchAuthor, createAuthor, updateAuthor, deleteAuthor
    }
}

export default useAuthor