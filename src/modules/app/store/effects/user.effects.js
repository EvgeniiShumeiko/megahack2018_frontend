import {
    setUserAction,
} from '@app/store/actions';

export const setUser = user => dispatch => {
    dispatch(
        setUserAction(user),
    );
};
