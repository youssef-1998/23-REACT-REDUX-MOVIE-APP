import {ADD_MOVIE,DELETE,STARFILTER,SEARCH,EDIT_MOVIE} from './actionstype';

export const add = (newMovie) => {
    return{
        type: ADD_MOVIE,
        payload: newMovie,
    }
}
export const remove = (id) => {
    return{
        type: DELETE,
        payload: id,
    }
}

export const search = (filter) => {
    return{
        type: SEARCH,
        payload: filter
    }
}
export const editMovie = (movie) => {
    return{
        type: EDIT_MOVIE,
        payload: movie
    }
}
