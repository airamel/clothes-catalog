import * as fromCloth from '../state/cloth/cloth.reducer';
import { ClothState } from './cloth/cloth.state';

export interface AppState {
  cloth: ClothState;
}

export const appReducer = {
  cloth: fromCloth.clothReducer,
}
