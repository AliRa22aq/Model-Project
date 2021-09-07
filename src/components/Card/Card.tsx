import React, { FC, useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './styles'
import { FiX } from 'react-icons/fi';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid } from '@material-ui/core';
import useWebAnimations from "@wellyshen/use-web-animations";


export const MediaCard: FC<any> = ({ id, image, firstName, lastName, Speaker__description }) => {

  const classes = useStyles();
  const smallScreen = useMediaQuery('(max-width:720px)');

  const [open, setOpen] = useState(false);
  const [left, serLeft] = useState(false)
  const [position, serPosition] = useState({
    x: 0,
    y: 0
  })

  const { ref, animate } = useWebAnimations();

  const handleOpen = (e: any) => {
    // Check the mid of the page
    const { innerWidth: width, innerHeight: height } = window;

    serPosition({
      x: e.clientX,
      y: e.clientY
    })

    // window.scrollTo(height/2);

    var element = document.getElementById(id);
    element?.scrollIntoView({behavior: "smooth"}); 
    // element?.scrollIntoView()
    // element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});


    // console.log(e.clientX)
    console.log("Secreen width", width)
    // console.log("Secreen per div", (width - 60 )/ 4)
    console.log("Clicking  at ", e.clientX)



    if (e.clientX > (width)/ 4 + 60  && e.clientX  < 2* (width)/ 4){
      animate({
        keyframes: { transform: `translateX(${-320}px` },
        animationOptions: { duration: 200, fill: "forwards" },
      });
    }
    if (e.clientX > 2*(width)/ 4  && e.clientX  < 3* (width)/ 4 - 60 ){
      animate({
        keyframes: [
          {transform: `translate(${320}px, ${0}px)` },
          // {transform: `translate(${320}px, ${50}px)` },
        ],
        animationOptions: { duration: 300, fill: "forwards" },
      });
    } 



    if (!open) {
      setOpen(true)
      serLeft(e.clientX > width/2 ? false : true)

    }

  };

  const handleClose = () => {
    animate({
      keyframes: { transform: `translate(${0}px, ${0}px)` },
      animationOptions: { duration: 200, fill: "forwards" },
    });

    setOpen(false);
  };


  return (
    <div>
      <Card className={classes.root} onClick={(e) => handleOpen(e)} ref={ref} id={id}>

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
        <Fade in={open}>


            <div className={classes.ModelCard} onClick={handleOpen} >

              <div className={classes.ModelCardMediaContainer} 
               style={{ float: left ? "left" : "right"}} >

                <CardActionArea>
                  <CardMedia
                    className={classes.ModelCardMediaImage}
                    image={image}
                    title="Contemplative Reptrile"
                  />

                  <CardContent className={classes.ModelCardNameContainer}>
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
              style={{ float: left ? "left" : "right" }}>


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


                <div onClick={handleClose} className={classes.ModelCardCross}> <FiX color="red" /> </div>


              </div>

            </div>
        </Fade>
      </Modal>

    </div>
  );
}
