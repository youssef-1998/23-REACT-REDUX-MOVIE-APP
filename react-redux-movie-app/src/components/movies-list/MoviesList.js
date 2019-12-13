import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MoviesListStyle.css';

import MoviesCard from '../movies-card/MoviesCard';

class MoviesList extends React.Component {
    render() {
        return (

            <div className="box-movie">
                {this.props.initState.map((el, i) =>  <MoviesCard key={i} movie={el}/>)}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        initState: state.Reducer
    };
};

export default connect(mapStateToProps)(MoviesList)