import React from 'react'

import { Typography } from '@mui/material';

import CModal from "./CModal";
import CButton from "./CButton";

interface LogoutModalProps {
    open: boolean;
    onClose: ()=> void;
    onLogout: ()=> void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({open, onClose, onLogout}) =>{
    return(
        <CModal open={open} onClose={onClose}>
            <div className='text-center'>
                <Typography>Yakin untuk logout?</Typography>
                <div className='d-flex content-around mt-16'>
                    <CButton text="Tidak" onClick={onClose} variant="text"/>
                    <CButton text="Ya" onClick={onLogout} variant="outlined"/>
                </div>
            </div>
        </CModal>
    )
}

export default LogoutModal