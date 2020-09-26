import { createAction, props } from '@ngrx/store';

export const save = createAction('[Form Component] Save', props<object>());
export const reset = createAction('[Form Component] Refresh');
