import React, { Component } from "react";
import './ModalCompStyle.css';
import { Modal, Button } from "react-bootstrap";
import { add, editMovie } from '../../actions/actionsMovie'
import { connect } from 'react-redux'
import uuid from 'uuid'

class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: this.props.editMode ? this.props.infos.title : '',
            date: this.props.editMode ? this.props.infos.date : '',
            rating: this.props.editMode ? this.props.infos.rating : null,
            picture: this.props.editMode ? this.props.infos.picture : '',
            description: this.props.editMode ? this.props.infos.description : '',
            generes: this.props.editMode ? this.props.infos.generes : '',
            trailer: this.props.editMode ? this.props.infos.trailer : '',
        };
    }
    handleShow = () => {
        this.setState({ show: !this.state.show });
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    add = () => {
        if (this.props.editMode) {
            this.props.updateMovie({ ...this.state, id: this.props.infos.id })
            this.setState({ show: false });
        } else {
            this.props.addNewMovie({ ...this.state, id: uuid() });
            this.setState({ show: false });
        }
    };
    render() {
        return (
            <div>

                <button type="button" class="btn btn-outline-info waves-effect" className={this.props.editMode ? 'btn btn-outline-info' : 'btn-plus'} variant="primary" onClick={this.handleShow}>
                    {this.props.editMode ? 'Edit' : '+ Add New Movie'}
                </button>

                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title className="tc">{this.props.editMode ? 'EDIT' : 'ADD'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="md-form mb-5">
                                {/* <label>Title:</label> */}
                                <input type="text" onChange={this.handleChange} name="title" value={this.state.title} placeholder="title movie" className="form-control validate" />
                            </div>
                            <div className="md-form mb-5">
                                {/* <label>Picture:</label> */}
                                <input type="text" onChange={this.handleChange} name="picture" value={this.state.picture} placeholder="link picture" className="form-control validate" />
                            </div>
                            <div className="md-form mb-5">
                                {/* <label>Date:</label> */}
                                <input type="text" onChange={this.handleChange} name="date" value={this.state.date} placeholder="date movie" className="form-control validate" />
                            </div>
                            <div className="md-form mb-5">
                                {/* <label>Rating:</label> */}
                                <input type="text" onChange={this.handleChange} name="rating" value={this.state.rating} placeholder="rating movie" className="form-control validate" />
                            </div>
                            <div className="md-form mb-5">
                                {/* <label>Description:</label> */}
                                <input type="text" onChange={this.handleChange} name="description" value={this.state.description} placeholder="Description movie" className="form-control validate" />
                            </div>
                            <div className="md-form mb-5">
                                {/* <label>generes:</label> */}
                                <input type="text" onChange={this.handleChange} name="generes" value={this.state.generes} placeholder="generes movie" className="form-control validate" />
                            </div>
                            <div className="md-form mb-5">
                                {/* <label>trailer:</label> */}
                                <input type="text" onChange={this.handleChange} name="trailer" value={this.state.trailer} placeholder="url trailer movie" className="form-control validate" />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>
                            Close
                         </Button>
                        <Button onClick={this.add} variant="primary">
                            {this.props.editMode ? 'Edit Movie' : 'Add Movie'}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addNewMovie: x => dispatch(add(x)),
        updateMovie: x => dispatch(editMovie(x))
    }
}
export default connect(null, mapDispatchToProps)(ModalComponent);
