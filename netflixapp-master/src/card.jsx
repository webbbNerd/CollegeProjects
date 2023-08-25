import './App.css';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Cards(props) {
    return (
    <>
    <Card className= "cardssize">
      <LazyLoadImage
        effect="blur"
        style={{width:"100%",objectFit:"fill"}}
        component="img"
        height="200"
        src={props.imgsrc}
      />
      <CardContent style={{paddingBottom:"0px"}}>
        <Typography style={{color:"gray"}}>
        {props.title}
        </Typography>
        <Typography gutterBottom style={{color:"black",fontWeight:700}} component="div">
          {props.sname}
          </Typography>
      </CardContent>
      <CardActions style={{padding:"0 0 10px 17px"}}>
        <Button style={{padding:"2px 15px",border:"1px solid"}}><a style={{fontFamily:"Exo 2, sans-serif",color:"gray",textDecoration:"none"}} href={props.links}>Watch Now</a></Button>
      </CardActions>
    </Card>
    </>
    );
  }
  
  export default Cards;
  

