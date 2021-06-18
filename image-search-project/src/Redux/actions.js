import axios from 'axios';
import * as constant from '../constant';
import {
    FETCH_IMAGES,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE,
    SORT_BY_VIEW,
    SORT_BY_SIZE
} from './actionTypes'

export const fetchImages = word => {
    return (dispatch) => {
        dispatch(fetchImagesRequest())
        axios
            .get(`${constant.BASEURL}${constant.KEY}&q=${word}&image_type=photo&per_page=50`)
            .then(response => {
                // response.data is the users
                const images = response.data.hits;
                //console.log(response.data);
                dispatch(fetchImagesSuccess(response.data.hits))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchImagesFailure(error.message))
            })
    }
}

export const sortBySize = () => {
    return {
        type: SORT_BY_SIZE
    }
}

export const fetchImagesRequest = () => {
    return {
        type: FETCH_IMAGES
    }
}

export const fetchImagesSuccess = images => {
    return {
        type: FETCH_IMAGES_SUCCESS,
        payload: images
    }
}

export const fetchImagesFailure = error => {
    return {
        type: FETCH_IMAGES_FAILURE,
        payload: error
    }
}