import React from 'react';
import Drawer from '@mui/material/Drawer';

interface CDrawerProps {
    open: boolean,
    children: React.ReactNode
    onClose: ()=> void, 
}

export default function CDrawer({open, onClose, children}: CDrawerProps) {

  return (
    <div>
        <Drawer
        anchor={'right'}
        open={open}
        onClose={onClose}
        >
            <div style={{ padding: '90px 24px'}}>
                {children}
            </div>
        </Drawer>
    </div>
  );
}
