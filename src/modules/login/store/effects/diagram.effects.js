import * as actions  from '@app/store/actions';

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

