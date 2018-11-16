import { createAction } from 'redux-act';

export const onNodeSelected = createAction('node selected :: done');
export const updateModel = createAction('update model :: done');
export const undo = createAction('undo :: done');
export const redo = createAction('redo :: done');

