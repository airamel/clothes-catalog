import { createReducer, on } from '@ngrx/store';

import * as ClothActions from './cloth.actions';
import { ClothState, initialState } from './cloth.state';
import { ClothItem } from '../../models/cloth-item.model';

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
    (state: ClothState, { spreadsheet }) => {
      // Map the values from the spreadsheet to an array of Cloth items, removes the first item which contains the
      // headers of the spreadsheet
      const value = 'Disponible';
      const clothItems: ClothItem[] = [...spreadsheet.values].reduce(
        (accumulator: ClothItem[], currentValue: string[]) => {
          accumulator.push({
            cloth: currentValue[3],
            brand: currentValue[5],
            description: currentValue[6],
            color: currentValue[8],
            size: currentValue[9],
            price: currentValue[11],
            status: currentValue[13],
            photo: currentValue[15],
          });
          return accumulator.filter(accumulator => accumulator.status == "Disponible");
        }, []).slice(1);
      return {
        ...state,
        clothes: clothItems,
      };
    }
  )
);

export function clothReducer(state: any, action: any): ClothState {
  return _clothReducer(state, action);
}
