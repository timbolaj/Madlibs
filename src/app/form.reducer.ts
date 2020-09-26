import { createReducer, on } from '@ngrx/store';
import { reset, save } from './form.actions';

export interface State {
  form: {}
}

export const initialState: State = {
  form: {}
}

export const _formReducer = createReducer(
  initialState,

  on(reset, () => initialState),
  on(save, (state, form) => (
    {
    ...state,
    form,
  }))
)

export function formReducer(state, action) {
  return _formReducer(state, action);
}
