import { ClothItem } from '../../models/cloth-item.model';

export interface ClothState {
  clothes: Array<ClothItem>;
}

export const initialState: ClothState = {
  clothes: [],
}
