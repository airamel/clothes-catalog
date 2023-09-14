import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as ClothSelector from '../../Domain/state/cloth/cloth.selector';
import { AppState } from '../../Domain/state/app.state';
import { Dispatchers } from '../../Domain/state/dispatchers';
import { Spreadsheet } from '../../Domain/models/spreadsheet.model';
import { ClothItem } from '../../Domain/models/cloth-item.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  clothes: ClothItem[] = [];
  clothes$: Subscription = this.store.pipe(select(ClothSelector.getClothesData))
    .subscribe((clothesData: ClothItem[]) => this.clothes = clothesData);

  constructor(private dispatchers: Dispatchers, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.dispatchers.invokeClothesData();
  }
}
