import React, { Component } from 'react';

// instead of their component files 

import { Header,   Feature, Navigation, ImageCarousel, Footer, Categories } from './Components'

class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <ImageCarousel />
                <Navigation></Navigation>
                <Categories />
                <Feature />
                <Footer />
            </div>
        )
    }
}

export default HomePage;