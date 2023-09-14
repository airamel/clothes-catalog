import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClothState } from './cloth.state';

export const CLOTH_DATA_NAME: string = 'main';

const getClothsState = createFeatureSelector<ClothState>(CLOTH_DATA_NAME);

export const getClothesData = createSelector(getClothsState,  (state: ClothState) => {
  return state.clothes;
});
