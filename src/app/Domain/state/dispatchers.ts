import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ClothActions from './cloth/cloth.actions';
import { AppState } from './app.state';

@Injectable({ providedIn: 'root' })
export class Dispatchers {
  constructor(private store: Store<AppState>) {
  }

  invokeClothesData(): void {
    this.store.dispatch(ClothActions.invokeGetClothes());
  }
}
