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
import './card.css'
import { FiX } from 'react-icons/fi';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    ['@media (max-width:780px)']: { maxWidth: 200 }
  },
  media: {
    height: 300,
    width: 300,
    "&:hover": {
      height: 350,
      width: 350,
    },
    ['@media (max-width:780px)']: {
      height: 180,
      width: 180,
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 70,
    marginRight: 70,
    // border: "1px solid black", 

  },
  ModelCard: {
    height: 380,
    // border: "1px solid black", 
    // maxHeight: 600

    // width: 1100
  },

  ModelCardMediaContainer: {
    height: 350,
    width: 300,
    // width: "30%",
    // border: "1px solid black", 

  },
  ModelCardMediaImage: {
    height: 300,
    width: 300,
    // border: "1px solid black", 

  },
  ModelCardNameContainer:{
    backgroundColor: "black",
    // border: "1px solid white", 

  },
  ModelCardName: {
    color: "yellow",
    // border: "1px solid black", 

  },
  ModelCardDescription: {
    color: "yellow",
    // border: "1px solid black", 

  },
  ModelCardTextContainer: {
    width: "70%",
    // border: "1px solid black", 
    margin: "20px 30px",
    maxHeight: 350,
    display: "flex",
    overflowY: "scroll"
    // msOverflowY: "scroll"
  },
  ModelCardCross: {
    // border: "1px solid black", 
    width: "20%",
    float: "right",
    justifyContent: "flex-end",
    display: "flex",
    margin: "0px 10px"
  },
  ModelCardDetails: {
    width: "80%",
    // border: "1px solid black", 
  },
  ModelCardHeading: {
    marginBottom: 10
  },
  ModelCardtxt: {
    marginBottom: 10
  },
  
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  })
);


export const MediaCard: FC<any> = ({ image, firstName, lastName, Speaker__description }) => {
  


  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<CSS.Property.Float>("none")
  const [left, serLeft] = useState(false)
  
  const classes = useStyles();

  const handleOpen = (e: any) => {
   
    if(!open){
      setOpen(true);
      console.log(e.screenX)
      setPosition(e.screenX > 500 ? "right":"left")
      serLeft(e.screenX > 500 ? false:true)
    }
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

          <Card onClick={handleOpen} >

          <div className={classes.ModelCard} >

                <div className={classes.ModelCardMediaContainer} style={{float: left? "left":"right"}}>

                  <CardActionArea>
                    <CardMedia
                      className={classes.ModelCardMediaImage}
                      image={image}
                      title="Contemplative Reptile"
                    />

                    <CardContent  className={classes.ModelCardNameContainer}>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.ModelCardName}>
                        {`${firstName} ${lastName}`}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" className={classes.ModelCardDescription} >
                        {Speaker__description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </div>


                <div className={classes.ModelCardTextContainer} 
                style={{ float: left? "left":"right"}}>


                  <div className={classes.ModelCardDetails} >

                  <Typography variant="h6" className={classes.ModelCardHeading}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                  </Typography >

                  <Typography className={classes.ModelCardtxt}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                  </Typography>

                  <Typography className={classes.ModelCardtxt}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                  </Typography>

                  <Typography className={classes.ModelCardtxt}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                  </Typography>

                  <Typography className={classes.ModelCardtxt}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                  </Typography>

                  <Typography className={classes.ModelCardtxt}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                  </Typography>

                  <Typography className={classes.ModelCardtxt}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                  </Typography>

                  </div>

                  <div onClick={()=> setOpen(false)} className={classes.ModelCardCross}> <FiX color="red" /> </div>


                </div>
                
                
          </div>

          </Card>



        </Fade>
      </Modal>

    </div>
  );
}
