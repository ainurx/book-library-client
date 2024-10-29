import { useState, useEffect, SetStateAction } from 'react'

import _ from 'lodash'
import { TextField } from "@mui/material";

import { Author } from '@/ts/types';
import CButton from '../CButton';
import CDrawer from "../CDrawer";

interface AuthorProps{
    id: number;
    name: string;
}

interface CreateAuthorProps{
    author?: AuthorProps;
    open: boolean;

    onSubmit: (payload: Author)=> void;
    onClose: ()=>void;
}

function CreateAuthor({author, open, onClose, onSubmit}: CreateAuthorProps){
    const [name, setName] = useState('')

    useEffect(()=>{
        if(!_.isEmpty(author)){
            setName(author.name)
        }
    }, [author])

    const onNameChange = (e: { target: { value: SetStateAction<string>; }; }) =>{
        setName(e.target.value)
    }

    const onDrawerClose = () =>{
        setName('')
        onClose()
    }

    const onFormSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault()
        const params = { name }
        if(!_.isEmpty(author)){
            params['id'] = author.id
        } 

        onSubmit(params)
    }

    return(
        <CDrawer open={open} onClose={onDrawerClose}>
            <h4 style={{ marginBottom: '18px'}}>{_.isEmpty(author) ? 'Create': 'Update'} author</h4>
            { !_.isEmpty(author) && <p className='my-16'>ID: {author.id}</p>  }
            <form className='d-grid' onSubmit={onFormSubmit}>
                <div className='mb-8'>
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={onNameChange}/>
                </div>
                <CButton text="Submit" type='submit' /> 
            </form>
        </CDrawer>
    )
}

export default CreateAuthor