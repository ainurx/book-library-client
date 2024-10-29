import React from 'react'

import { Author } from '@/ts/types';
import { AuthorInterface } from '@/ts/interfaces';
import CButton from '../CButton';
import CModal from "../CModal";

interface DeleteAuthorProps {
    open: boolean;
    author: Author | {};
    onClose: ()=> void;
    onDelete:(payload: Author) => void;
}

const DeleteAuthor: React.FC<DeleteAuthorProps> = ({open, onClose, author, onDelete}) =>{
    return(
        <CModal open={open} onClose={onClose}>
            <h3 className='text-center'>Hapus author {author.name}?</h3>
            <div className='d-flex content-around mt-16'>
                <CButton text="Batal" onClick={onClose} />
                <CButton text="Hapus" variant='outlined' onClick={()=> onDelete(author)} />
            </div>
        </CModal>
    )
}

export default DeleteAuthor