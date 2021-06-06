import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Image1 from './practice.png'
function ImageCarousel(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            url:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF3bnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            url:Image1    
        }
    ]

    return (
        <Carousel autoPlay>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img src={props.item.url} alt={props.item.name}/>
            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}

export default ImageCarousel