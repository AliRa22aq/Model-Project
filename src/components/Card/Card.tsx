import React, { FC, useState} from 'react';
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

export const MediaCard: FC<any> = ({ image, firstName, lastName, Speaker__description }) => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [left, serLeft] = useState(false)


  const handleOpen = (e: any) => {
    // Check the mid of the page
    const { innerWidth: width, innerHeight: height } = window;

    if (!open) {
      serLeft(width/2/e.clientX < 1 ? false : true)
      setOpen(true)
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
        <Fade in={open}>

          <Card onClick={handleOpen} >

            <div className={classes.ModelCard} >

              <div className={classes.ModelCardMediaContainer} style={{ float: left ? "left" : "right" }}>

                <CardActionArea>
                  <CardMedia
                    className={classes.ModelCardMediaImage}
                    image={image}
                    title="Contemplative Reptile"
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

                <div onClick={() => setOpen(false)} className={classes.ModelCardCross}> <FiX color="red" /> </div>


              </div>
            </div>
          </Card>
        </Fade>
      </Modal>

    </div>
  );
}
