import { createReducer, on } from '@ngrx/store';

import * as ClothActions from './cloth.actions';
import { ClothState, initialState } from './cloth.state';

const _clothReducer = createReducer(
  initialState,
  // Invoke clothes data
  on(
    ClothActions.invokeGetClothes,
    (state: ClothState) => {
      return { ...state };
    }
  ),
  // Get forecast data
  on(
    ClothActions.getClothes,
    (state: ClothState, { clothes }) => {
      return {
        ...state,
        clothes,
      };
    }
  )
);

export function clothReducer(state: any, action: any): ClothState {
  return _clothReducer(state, action);
}
