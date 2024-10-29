'use client'

import { useState } from 'react'
import { TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { EventParams } from '@/ts/interfaces';
import styles from './styles.module.css'
import CButton from '@/components/CButton';

function Page(){
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: EventParams) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event: EventParams) => {
      event.preventDefault();
    };
  

    return(
        <div className={styles.formWrapper}>
            <h2>Login</h2>
            <form className='my-16 content-center d-grid'>
                <div className='mb-16'>
                    <TextField
                        id="outlined-disabled"
                        label="Username"
                        
                    />
                </div>
                <div className='mb-16'>
                    <FormControl sx={{ width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label={
                                    showPassword ? 'hide the password' : 'display the password'
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>
                <CButton text="Login" onClick={()=>{}} />
            </form>
        </div>
    )
}

export default Page