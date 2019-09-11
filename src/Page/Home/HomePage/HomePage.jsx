import React, { Component, Fragment } from 'react'
import Carousel from '../../../Common/Components/Carousel/Carousel'
import ListMovies from '../../../Common/Components/ListMovies/ListMovies'
import Theaters from '../../../Common/Components/Theaters/Theaters';
// import './HomePage.css'

export default class HomePage extends Component {

    render() {
        return (
            <Fragment>
                <Carousel />
                <ListMovies />
                <Theaters />
            </Fragment>
        )
    }
}
