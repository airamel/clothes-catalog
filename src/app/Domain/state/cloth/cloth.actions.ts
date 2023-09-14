import { createAction, props } from '@ngrx/store';

import { Spreadsheet } from '../../models/spreadsheet.model';

export const INVOKE_GET_CLOTHES: string = '[Get Clothes Data] Invoke Clothes Data';

export const GET_CLOTHES: string = '[Get Clothes Data] Retrieve Clothes Data';

export const invokeGetClothes = createAction(
  INVOKE_GET_CLOTHES,
);

export const getClothes = createAction(
  GET_CLOTHES,
  props<{ clothes: Spreadsheet }>(),
);
