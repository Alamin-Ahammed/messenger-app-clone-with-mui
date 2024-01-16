import { Typography } from '@mui/material'

export default function Messege({Text,styles}) {
  return (
    <>
        <Typography sx={{bgcolor: '#0A7CFF',color: '#fff',borderRadius: '5rem',padding: '0.5rem 1rem',width: 'fit-content',...styles}}>
            {Text}
        </Typography>
    </>
  )
}
