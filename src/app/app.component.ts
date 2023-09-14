import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as ClothSelector from './Domain/state/cloth/cloth.selector';
import { AppState } from './Domain/state/app.state';
import { Dispatchers } from './Domain/state/dispatchers';
import { Spreadsheet } from './Domain/models/spreadsheet.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'clothes-catalog';
  clothes: Spreadsheet = { majorDimension: '', range: '', values: [] };
  clothes$: Subscription = this.store.pipe(select(ClothSelector.getClothesData))
    .subscribe((data: Spreadsheet) => {
      this.clothes = data
      console.log('.....', this.clothes);
    });
  constructor(private dispatchers: Dispatchers, private store: Store<AppState>) {
  }
  ngOnInit(): void {
    this.dispatchers.invokeClothesData();
  }
}
