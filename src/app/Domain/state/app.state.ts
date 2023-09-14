import * as fromCloth from '../state/cloth/cloth.reducer';
import { ClothState } from './cloth/cloth.state';

export interface AppState {
  main: ClothState;
}

export const appReducer = {
  main: fromCloth.clothReducer,
}
