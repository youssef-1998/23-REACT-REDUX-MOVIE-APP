import React, { Component } from 'react'
import { connect } from 'react-redux';
import './MoviesCardStyle.css';
import StarRatingComponent from 'react-star-rating-component';
import { remove } from '../../actions/actionsMovie';

import { MDBNavLink } from 'mdbreact';
import ModalComponent from '../modal/ModalComponent';

class MoviesCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        const { movie } = this.props;
        return (
            <div className="film-card shadow-lg p-3 mb-5 bg-white rounded ">
                <div className="custom-image">
                    <img className="img" src={movie.picture} />
                </div>
                <div className="custom-card">
                    <h3>{movie.title}</h3>
                    <p>{movie.date}</p>
                    <p>{movie.votes}</p>
                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={movie.rating}
                    />
                    <div className="text-center">
                        <MDBNavLink
                            exact
                            to={`/description/${movie.id}`}
                        >
                            <button type="button" className="btn btn-info btn-rounded">Movie Description</button>
                        </MDBNavLink>
                        <ModalComponent infos={movie} editMode={true} />
                        <button onClick={() => this.props.deleteMovie(movie.id)} type="button" class="btn btn-outline-info waves-effect ">Remove</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteMovie: id => dispatch(remove(id)),
    };
};
export default connect(null, mapDispatchToProps)(MoviesCard)