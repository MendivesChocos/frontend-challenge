import * as actionTypes from './actionTypes';
import { UserModel } from '../../model/UserModel';

interface State {
    data: any;
    isFetching: boolean;
}

const initialState: State = {
    data: {},
    isFetching: true
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_SUCESS:
            return {
                ...state,
                data: action.data,
                isFetching: false,
            }
        case actionTypes.FETCH_USER_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        case actionTypes.ADD:
            Object.assign(state.data, action.data);
            return {
                ...state,
                data: {...state.data}
            }
        case actionTypes.EDIT:
            console.log('action.uuid', action.uuid);
            alert(`Se modifico a: ${state.data[action.uuid].name}`);
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.uuid]: {
                        ...state.data[action.uuid],
                        like: state.data[action.uuid].like + 1
                    }
                }
            }
        case actionTypes.DELETE:
            delete state.data[action.uuid];
            return {
                ...state,
                data: {...state.data}
            }
        default:
            return state;
    }
}
