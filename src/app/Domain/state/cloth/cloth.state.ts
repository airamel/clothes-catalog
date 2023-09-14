import { Spreadsheet } from '../../models/spreadsheet.model';

export interface ClothState {
  clothes: Spreadsheet;
}

export const initialState: ClothState = {
  clothes: { range: '', majorDimension: '', values: [] },
}
