import React from "react";
import Carousel from "react-elastic-carousel";
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Ty, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import Item from "./Item";
import CourseLogo from "./CourseLogo.jpg";
import styles from "./Slider.module.css"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const useStyles = makeStyles((theme) => ({
  root : {
    maxWidth : 345,
    width : "300px",
    margin : "2%",
    borderRadius : "10px"
  }
}))

function CourseCard({data}){
  var image = require("./CourseLogo.jpg").default;

  const classes = useStyles();
  return (
<Card className={classes.root}>
  <CardActionArea>
  <CardMedia alt="course" component="img" height="140" title={data} image={image}/>
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      Course Title
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      Course Number {data}
    </Typography>
  </CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">Open</Button>
  </CardActions>
</Card>
  )

}

function Sliders() {
  const data = [1,2,3,4,5,6,7,8,9]
  var courses = data.map((number)=>{
    return <CourseCard data={number}/>
  })
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Sliders</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          {courses}
        </Carousel>
      </div>
    </>
  );
}
export default Sliders;