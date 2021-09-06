import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CSS from 'csstype';


import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    ['@media (max-width:780px)']: { maxWidth: 200 }
  },
  media: {
    height: 300,
    width: 300,
    ['@media (max-width:780px)']: {
      height: 180,
      width: 180,
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModelCard: {
    width: '100%',
    hight: '100%',
    margin: "0px 50px",
  },
  ModelCardMedia: {
    width: '40%%',
    borderRadius: 1,
    borderColer: "black",
  },
  ModelCardText: {
    width: '60%%',
    borderRadius: 1,
    borderColer: "black"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export const MediaCard: FC<any> = ({ image, firstName, lastName, Speaker__description }) => {
  
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<CSS.Property.Float>("none")
  
  const classes = useStyles();

  const handleOpen = (e: any) => {
    console.log(e.screenX)
    setPosition(e.screenX > 500 ? "right":"left")

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Card className={classes.root} onClick={(e) => handleOpen(e)}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {`${firstName} ${lastName}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {Speaker__description}
            </Typography>
          </CardContent>
        </CardActionArea>

      </Card>


      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade  in={open}>

          <Card className={classes.ModelCard} onClick={handleOpen} >

            <div className={classes.ModelCardMedia} style={{float: position}}  >

              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image}
                  title="Contemplative Reptile"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`${firstName} ${lastName}`}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {Speaker__description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </div>

              {/* <div style={{width: 500, height: 500, float: "left"}}>   */}
              <div className={classes.ModelCardText} >  

              hello world

              </div>




          </Card>



        </Fade>
      </Modal>

    </div>
  );
}
