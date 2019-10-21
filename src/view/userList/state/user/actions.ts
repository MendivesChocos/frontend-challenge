import { serviceUser } from './services';
import * as actionTypes from './actionTypes';

export const add = (data) => ({
    type: actionTypes.ADD,
    data
});

export const edit = (uuid: string) => ({
    type: actionTypes.EDIT,
    uuid
});

export const deleteCard = (uuid: string) => ({
    type: actionTypes.DELETE,
    uuid
});

export const fetchUserSucess = (data) => ({
    type: actionTypes.FETCH_USER_SUCESS,
    data
});

export const fetchUser = () => {
    return async dispatch => {
        try {
            const data = await serviceUser.get();
            console.log('data', data);
            dispatch(fetchUserSucess(data))
        } catch (e) {
            console.log('error');
        }
    }
};

export const fetchAddUser = () => {
    return async dispatch => {
        try {
            const data = await serviceUser.getUser();
            console.log('data', data);
            dispatch(add(data))
        } catch (e) {
            console.log('error');
        }
    }
}