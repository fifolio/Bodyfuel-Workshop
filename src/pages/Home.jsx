import {Box} from '@mui/material'

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

import {useState} from 'react'

export default function Home(){
    const [bodyPart, setbodyPart] = useState('all')
    const [exercises, setExercises] = useState([])
    return (
        <Box>
            <HeroBanner />

            <SearchExercises 
            setExercises={setExercises} 
            bodyPart={bodyPart} 
            setBodyPart={setbodyPart} />
            
            <Exercises 
            setExercises={setExercises} 
            exercises={exercises}
            bodyPart={bodyPart} 
            />
        </Box>
    )
}


