import { createReducer, on } from '@ngrx/store';
import { loadText, saveText, reset } from './form.actions';

export const initialState = {
  name: '',
  adjective1: '',
  adjective2: '',
  adverb: '',
  city: '',
  nameOfFriend: '',
}

export const _formReducer = createReducer(
  initialState,
  on(loadText, (state) => state),
  on(reset, () => initialState),
  on(saveText, (state, val) => {
    return {
      ...state,
      val
    }
  }),
)

export function formReducer(state, action) {
  console.log(state)
  console.log(action)
  return _formReducer(state, action);
}
