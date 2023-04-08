import {Link} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material';


export default function ExerciseCard ({exercise}) {
    return (
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row">

                <Button sx={{
                    ml: '21px', 
                    color: '#fff',
                    background: '#ffa9a9',
                    fontSize: '14px',
                    borderRadius: '5px',
                    textTransform: 'capitalize'
                }}>
                    {exercise.bodyPart}
                </Button>

                     <Button sx={{
                    ml: '21px', 
                    color: '#fff',
                    background: '#fcc757',
                    fontSize: '14px',
                    borderRadius: '5px',
                    textTransform: 'capitalize'
                }}>
                    {exercise.target}
                </Button>

                <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" textTransform="capitalize">
                {exercise.name}
                </Typography>

            </Stack>
        </Link>
    )
}