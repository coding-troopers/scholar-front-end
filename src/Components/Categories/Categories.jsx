import React from "react";
import { Container, Card, CardActionArea, CardMedia, Grid, Typography, CardContent } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import './Categories.css';
import {data} from '../../data/Images/category'

const useStyles = makeStyles(() => ({
    root: {
        width: "100vw",
        height: "120vh",
    },
}));

var categoriesCard = data.map(item => (
    <Grid item sm={3}>
    <Card className="cardActions">
        <CardActionArea >
            <CardMedia className="card"
                image={require(`../../data/Images/${item.name}`).default}
                style={{ height: 300 }} />
            <CardContent>
                <Typography variant="h5"><span className="categoryName">{item.category}</span></Typography>
            </CardContent>
        </CardActionArea>
    </Card>
</Grid>
))
const Categories = () => {
    const Classes = useStyles();
    return (
        <div className="Box">
            <Container className={Classes.root}>
                <h1>Top categories</h1>
                <Grid container spacing={4}>
                    {categoriesCard}
                </Grid>
            </Container>
            <h1></h1>
        </div>
    );
}
export default Categories;