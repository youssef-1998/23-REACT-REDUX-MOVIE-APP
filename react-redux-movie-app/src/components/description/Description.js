import React, { Component } from 'react'
import './DescriptionStyle.css';
import { connect } from 'react-redux';
import { MDBBtn, MDBIcon, MDBNavLink } from "mdbreact";
import StarRatingComponent from 'react-star-rating-component';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.setState(
            this.props.movies.filter(el => el.id == this.props.match.params.id)[0]
        )
    }

    render() {
        return (
            <div className="film shadow-lg p-3 mb-5 bg-white rounded d-flex ">
                <div className="custom-image">
                    <img className="img-des" src={this.state.picture} />
                </div>
                <div className="custom-card p">
                    <h3>{this.state.title}</h3>
                    <hr />
                    <p>{this.state.date}</p>
                    <hr />
                    <p>{this.state.votes}</p>
                    <div className="w-75 p-3 pl">
                        <strong> Description: </strong>
                        <p>{this.state.description}</p>
                    </div>
                    <hr />
                    <div>
                        <strong className="gen">Generes:</strong>
                        <span class="badge badge-success">{this.state.generes}</span>
                    </div>
                    <StarRatingComponent
                        className=" star"
                        name="rate1"
                        starCount={5}
                        value={this.state.rating}
                    />
                    <hr />
                    <strong> Trailer: </strong>
                    <div className="embed-responsive embed-responsive-21by9">
                        <iframe className="embed-responsive-item" src={this.state.trailer} width="640" height="360"></iframe>
                    </div>
                    <MDBNavLink
                        exact
                        to={`/`}
                    >
                        <div className="d-flex justify-content-end">
                            <MDBBtn gradient="blue"><MDBIcon icon="home" fixed /> Home</MDBBtn>
                        </div>
                    </MDBNavLink>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        movies: state.Reducer
    }
}
export default connect(mapStateToProps)(Description)
