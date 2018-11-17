import { createReducer } from 'redux-act';

import {
    onNodeSelected,
    undo,
    redo,
    updateModel,
} from '@app/store/actions';

export default createReducer({
    [onNodeSelected]: (state, node) => ({
        ...state,
        selectedNode: node,
    }),
    [updateModel]: (state, model) => ({
        ...state,
        model: model,
    }),
    [undo]: (state) => ({
        ...state,
    }),
    [redo]: (state) => ({
        ...state,
    }),
},
{
    selectedNode: '',
    model: '',
});
