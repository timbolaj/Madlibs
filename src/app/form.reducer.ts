import { createReducer, on } from '@ngrx/store';
import { reset, save } from './form.actions';

export interface State {
  name: string,
  adjective1: string,
  adjective2: string,
  adverb: string,
  city: string,
  nameOfFriend: string,
}

export const initialState: State = {
  name: '',
  adjective1: '',
  adjective2: '',
  adverb: '',
  city: '',
  nameOfFriend: '',
}

export const _formReducer = createReducer(
  initialState,

  on(reset, state => initialState),
  on(save, (state, form) => (
    {
    form,
    ...state
  }))
)

export function formReducer(state, action) {
  return _formReducer(state, action);
}
