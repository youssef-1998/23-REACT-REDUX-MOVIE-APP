import React, { Component } from 'react'
import './App.css';

import SearchBar from './components/search/SearchBar';
import MoviesList from './components/movies-list/MoviesList';
import ModalComponent from './components/modal/ModalComponent'

class App extends Component {

  rateMovie = x => {
    this.setState({ newRating: x })
  }

  searchMovie = y => {
    this.setState({
      keyword: y
    })
  }

  render() {

    return (
      <div className="App">
        <div className="d-flex justify-content-between">
          <SearchBar />
        </div>
        <MoviesList />
        <ModalComponent editMode={false} />
      </div>
    )
  }
}
export default App
