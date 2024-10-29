"use client"

import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import toast from 'react-hot-toast'

import { Author } from '@/ts/types';
import { AuthorInterface } from '@/ts/interfaces';
import CButton from '@/components/CButton'
import CLoading from '@/components/CLoading';
import CTable from "@/components/CTable"
import CreateAuthor from '@/components/authors/CreateAuthor';
import DeleteAuthor from '@/components/authors/DeleteAuthor';
import useAuthor from '@/hooks/useAuthor';

type TaddAuthorPayload = Pick<Author, 'name'>

export default function Page(){
    const [create, setCreate] = useState(false)
    const [update, setUpdate] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [selectedAuthor, setSelectedAuthor] = useState<Partial<Author>>({}) 
    const { loading, authors, fetchAuthor, createAuthor, deleteAuthor, updateAuthor } = useAuthor()

    useEffect(()=>{
        fetchAuthor()
    }, [])

    const onAddAuthor = async(payload: TaddAuthorPayload) =>{
        try{
            await createAuthor(payload)
            setSelectedAuthor({})
            setCreate(false)
            toast.success('Author berhasil ditambahkan')
        } catch(err: any){
            console.log(err)
            toast.error(err.message)
        }
    }

    const onDeleteClick = (params: AuthorInterface) =>{
        setSelectedAuthor(params)
        setDeleteModal(true)
    }

    const onDeleteClose = () =>{
        setSelectedAuthor({})
        setDeleteModal(false)
    }
    
    const onDeleteProceed = async(payload: Author) =>{
        await deleteAuthor(payload)
        setSelectedAuthor({})
        setDeleteModal(false)    
    }

    const onEditClick = (params: AuthorInterface) =>{
        setUpdate(true)
        setSelectedAuthor(params)
    }

    const onDrawerClose = () =>{
        setSelectedAuthor({})
        setCreate(false)
        setUpdate(false)
    }

    return(
        <>
            <CLoading loading={loading} />
            <Grid container spacing={3} style={{ marginBottom: '24px'}}>
                <Grid size={6}>
                    <h2>Authors</h2>
                </Grid>
                <Grid size={6}>
                    <Grid container justifyContent={"flex-end"}>
                        <CButton text="Create" onClick={()=>setCreate(true)}/>
                    </Grid>
                </Grid>
            </Grid>
            <CTable 
                data={authors.data}
                onEdit={onEditClick}
                onDelete={onDeleteClick}    
            />
            <CreateAuthor 
                open={create} 
                onClose={onDrawerClose} 
                onSubmit={(payload: TaddAuthorPayload)=> onAddAuthor(payload)}
            />
            <CreateAuthor 
                open={update} 
                author={selectedAuthor}
                onClose={onDrawerClose} 
                onSubmit={(payload: Author)=> updateAuthor(payload)}
            />
            <DeleteAuthor
                open={deleteModal}
                onClose={onDeleteClose}
                author={selectedAuthor}
                onDelete={onDeleteProceed}
            />
        </>
    )
}
