import { Component, OnInit } from '@angular/core';
import { ClothService } from './Data/cloth/cloth.service';
import { Spreadsheet } from './Domain/models/spreadsheet.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clothes-catalog';
  constructor(private clothService: ClothService) {
  }
  ngOnInit(): void {
    console.log(this.clothService.getSpreetsheet().subscribe((spreadSheet: Spreadsheet) => spreadSheet));
  }
}
