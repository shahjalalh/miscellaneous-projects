import history from '../history';

import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM
} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    //const response = await streams.post('/streams', {...formValues, userId});

    //dispatch({type: CREATE_STREAM, payload: response.data});
    history.push('/')
};