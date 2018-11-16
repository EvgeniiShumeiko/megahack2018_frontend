import * as actions  from '@app/store/actions';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

export const onNodeSelected = node => dispatch => {
    dispatch(
        actions.onNodeSelected(node),
    );
};

export const updateModel = model => dispatch => {
    dispatch(
        actions.updateModel(model),
    );
};

export const onUndo = () => dispatch => {
    dispatch(
        UndoActionCreators.undo()
    );
};

export const onRedo = () => dispatch => {
    dispatch(
        UndoActionCreators.redo()
    );
};



