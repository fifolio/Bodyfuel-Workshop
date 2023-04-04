import {Stack, Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'

export default function BodyPart({item, setBodyPart, bodyPart}) {
    return (
        <Stack
            type="button" 
            alignItems="center"
            justifyContent="center"
            className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '100%',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}>
            <img
            src={Icon} 
            alt='dumbbell'
            style={{
                width: '40px',
                height: '40px'
            }} />
        </Stack>
    )
}