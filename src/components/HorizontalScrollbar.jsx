import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import BodyPart from '../components/bodyPart'

export default function HorizontalScrollbar({ data, bodyPart, setBodyPart }) {

    return (
        <Grid 
        alignItems="center" 
        justifyContent="center"
        container 
        rowSpacing={3} 
        columnSpacing={{ xs: 1, sm: 9, md: 3 }}>

        {data.map((item) => (
            <Grid 
            item 
            sm={6} 
            md={3}
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            >
            <Card>
                <CardContent>
                    {bodyPart ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : '' }
                </CardContent>
            </Card>
            </Grid>
            ))}
        </Grid>
    )
}


