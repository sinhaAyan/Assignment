import {
    FETCH_IMAGES,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE
} from './actionTypes';

const initialState = {
    loading: false,
    // response: {},
    images: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGES:
            return {
                ...state,
                loading: true
            }
        case FETCH_IMAGES_SUCCESS:
            return {
                loading: false,
                //response: action.payload,
                images: action.payload,
                error: ''
            }
        case FETCH_IMAGES_FAILURE:
            return {
                loading: false,
                images: [],
                error: action.payload
            }
        default: return state
    }
}
export default reducer;