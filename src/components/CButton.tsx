import { Button } from '@mui/material'

interface CButtonProps {
    variant?: 'text' | 'outlined' | 'contained'; // Optional prop
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: ()=> void
  }

function CButton({variant = 'contained', text, type = 'button', onClick}: CButtonProps){

    return(
        <Button variant={variant} color={variant === 'contained' ? 'primary' : 'error'} 
        type={type}
        onClick={onClick}>
            {text}
        </Button>
    )
}

export default CButton