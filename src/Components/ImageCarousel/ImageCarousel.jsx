import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Image1 from '../../data/practice.png'
import Image2 from '../../data/e-learn.png'
import Image3 from '../../data/online-learning.jpg'

function ImageCarousel(props)
{
    var images = [
        {
           url:Image1 
        },
        {
            url:Image2    
        },
        {
            url:Image3
        }
    ]

    return (
        <Carousel autoplay>
            {
                images.map( (image, i) => <Item key={i} image={image} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <img src={props.image.url} alt={props.image.name} width='100%' height='600em'/>
        </Paper>
    )
}

export default ImageCarousel