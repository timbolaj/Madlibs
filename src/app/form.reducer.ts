import { createReducer, on } from '@ngrx/store';
import { reset, save } from './form.actions';

export interface appState {
  form: {},
  numberOfForms: number,
}

export const initialState: appState = {
  form: {},
  numberOfForms: 0
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
