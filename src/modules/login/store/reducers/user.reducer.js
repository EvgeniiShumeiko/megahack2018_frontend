import { createReducer } from 'redux-act';

import {
    setUserAction,
} from '@app/store/actions';

export default createReducer({
    [setUserAction]: (state, user) => ({
        ...state,
        ...user,
    }),
}, {
    email: '',
    name: '',
});
