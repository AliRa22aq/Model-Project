import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300,
      scrollBehavior: "smooth",
      ['@media (max-width:780px)']: { maxWidth: 200,}
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
      marginLeft: 70,
      marginRight: 70,
      
      ['@media (max-width:780px)']: {
        
      }
      
    },
    ModelCard: {
      height: 380,     
      backgroundColor: "white",
    },
  
    ModelCardMediaContainer: {
      height: 350,
      width: 300,
      ['@media (max-width:780px)']: {float: "none"}      
      // width: "30%",
      // border: "1px solid black", 
  
    },
    ModelCardMediaImage: {
      height: 300,
      width: 300,
      ['@media (max-width:780px)']: {
        height: 250,
        width: 250,
      },

  //  img: {
  //     ['@media (max-width:780px)']: {
  //       height: 250,
  //       width: 250,
  //       alignItems: "center",
  //       alignContent: "center"
  //     }
      
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
      // height: 400,
      // border: "1px solid black", 
      margin: "20px 30px",
      maxHeight: 350,
      display: "flex",
      overflowY: "scroll",
      ['@media (max-width:780px)']: {float: "none"}
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
  