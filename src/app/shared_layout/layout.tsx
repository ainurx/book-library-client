"use client"

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';

import Sidebar from '../../components/Sidebar'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

function SharedLayout({children}: { children: React.ReactNode}){
    return(
        <Box sx={{ display: 'flex' }}>
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
            <Toaster/>
        </Box>
    )
}

export default SharedLayout