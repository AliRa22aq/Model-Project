import React, {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 250,
    width: 250
  },
});

export const MediaCard: FC<any> = ({image, firstName, lastName, Speaker__description}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
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
  );
}
