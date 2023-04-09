import { Stack, Typography } from '@mui/material'

export default function BodyPart({ item, setBodyPart, bodyPart }) {

    let icon = '';
    switch (item) {
        case "all":
            icon = "/src/assets/icons/gym.png";
            break;
        case "back":
            icon = "/src/assets/icons/back.png";
            break;
        case "cardio":
            icon = "/src/assets/icons/cardio.png";
            break;
        case "chest":
            icon = "/src/assets/icons/chest.png";
            break;
        case "lower arms":
            icon = "/src/assets/icons/lower-arms.png";
            break;
        case "lower legs":
            icon = "/src/assets/icons/lower-legs.png";
            break;
        case "neck":
            icon = "/src/assets/icons/neck.png";
            break;
        case "shoulders":
            icon = "/src/assets/icons/shoulders.png";
            break;
        case "upper arms":
            icon = "/src/assets/icons/upper-arms.png";
            break;
        case "upper legs":
            icon = "/src/assets/icons/upper-legs.png";
            break;
        case "waist":
            icon = "/src/assets/icons/waist.png";
            break;
        default:
            return icon = "/src/assets/icons/gym.png";
    }

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
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            }}
        >
            <img src={icon} alt='dumbbell' style={{ width: '100px', height: '100px' }} />
            <Typography
                fontSize="24px"
                fontWeight="bold"
                color="#3A1212"
                textTransform="capitalize"
            >{item}</Typography>
        </Stack>
    )
}