import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs';
import { Injectable } from '@angular/core';

import * as ClothActions from '../cloth/cloth.actions';
import { ClothService } from '../../../Data/cloth/cloth.service';
import { Spreadsheet } from '../../models/spreadsheet.model';

@Injectable({ providedIn: 'root' })
export class ClothEffect {
  getClothesData$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(ClothActions.invokeGetClothes),
        exhaustMap(() => {
          return this.clothService
            .getSpreadsheet()
            .pipe(
              map((spreadsheetData: Spreadsheet) => {
                return ({
                  type: ClothActions.GET_CLOTHES,
                  spreadsheet: spreadsheetData,
                });
              })
            )
        })
      )
  );

  constructor(private actions$: Actions, private clothService: ClothService) {
  }
}
