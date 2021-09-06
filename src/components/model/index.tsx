import React from 'react'
import {MediaCard} from '../Card'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      margin: 50,
    },
  });

const Model = () => {

    const classes = useStyles();

    const backgroundImage = "https://pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/c06ff6bb11fe099c343fc1eca1f6889c.jpg?w=400";

    return (
        <div className={classes.root}>
            < MediaCard 
                image={backgroundImage} 
                firstName="Shameran"
                lastName="Abed"
                Speaker__description="Global poverty activist"
                />

        </div>
    )
}

export default Model
