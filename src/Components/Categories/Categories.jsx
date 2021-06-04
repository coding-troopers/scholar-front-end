import React from "react";
import { Container, Card, CardActionArea, CardMedia, Grid, Typography, CardContent } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import './Categories.css';
const useStyles = makeStyles(() => ({
    root: {
        width: "100vw",
        height: "120vh",
    },
}));
const Categories = () => {
    const Classes = useStyles();
    return (
        <div className="Box">
            <Container className={Classes.root}>
                <h1>Top categories</h1>
                <Grid container spacing={4}>
                    <Grid item sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className="card"
                                    image="./Images/design.png"
                                    style={{ height: 300 }} />
                                <CardContent>
                                    <Typography variant="h5">Design</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                    <Grid item sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className="card"
                                    image="./Images/web development.jpeg"
                                    style={{ height: 300 }} />
                                <CardContent>
                                    <Typography variant="h5">Development</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>


                    <Grid item sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className="card"
                                    image="./Images/marketing.jpg"
                                    style={{ height: 300 }} />
                                <CardContent>
                                    <Typography variant="h5">Marketing</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                    <Grid item sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className="card"
                                    image="./Images/IT.jpg"
                                    style={{ height: 300 }} />
                                <CardContent>
                                    <Typography variant="h5">IT and Software</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                    <Grid item sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className="card"
                                    image="./Images/personal development.jpg"
                                    style={{ height: 300 }} />
                                <CardContent>
                                    <Typography variant="h5">Personal Development</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className="card"
                                    image="./Images/Business.jpg"
                                    style={{ height: 300 }} />
                                <CardContent>
                                    <Typography variant="h5">Business</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                    <Grid item sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className="card"
                                    image="./Images/photography.jpg"
                                    style={{ height: 300 }} />
                                <CardContent>
                                    <Typography variant="h5">Photography</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className="card"
                                    image="./Images/MUSIC.jpg"
                                    style={{ height: 300 }} />
                                <CardContent>
                                    <Typography variant="h5">Music</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
export default Categories;