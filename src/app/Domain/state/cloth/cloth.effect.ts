import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { Injectable } from '@angular/core';

import * as ClothActions from '../cloth/cloth.actions';
import { ClothService } from '../../../Data/cloth/cloth.service';

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
              map((spreadsheetData) => {
                return ({
                  type: ClothActions.GET_CLOTHES,
                  clothes: spreadsheetData,
                });
              })
            )
        })
      )
  );

  constructor(private actions$: Actions, private clothService: ClothService) {
  }
}
