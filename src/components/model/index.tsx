import React, { useState } from 'react'
import { MediaCard } from '../Card/Card'
import { makeStyles } from '@material-ui/core/styles';
import Data from "../../assests/dummydata"
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: "50px 100px",
        flexDirection: 'row',
        ['@media (max-width:780px)']: { margin: "20px 20px" }
    },
    profile: {
        margin: 5,
        width: "100%"
    }
})
);

const Model = () => {

    const classes = useStyles();



    return (
        <div className={classes.root}>

            <Grid container spacing={0} className={classes.profile}>
                {
                    Data && Data.map((profile, key) =>
                        <Grid item xs={4} lg={3} key={key}>
                            < MediaCard
                                image={profile.image}
                                firstName={profile.firstName}
                                lastName={profile.lastName}
                                Speaker__description={profile.description}
                            />
                        </Grid>
                    )
                }
            </Grid>



        </div>
    )

}

export default Model
