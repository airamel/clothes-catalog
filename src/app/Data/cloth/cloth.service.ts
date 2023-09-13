import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Spreadsheet } from '../../Domain/models/spreadsheet.model';

@Injectable({
  providedIn: 'root'
})
export class ClothService {

  constructor(private httpClient: HttpClient) { }
  getSpreadsheet(): Observable<Spreadsheet> {
    const spreadsheetId: string = environment.spreadsheetId ?? '';
    const spreadsheetName: string = environment.spreadsheetName ?? '';
    const spreadsheetApiKey: string = environment.spreadsheetApiKey ?? '';
    return this.httpClient
    .get<Spreadsheet>(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${spreadsheetName}?key=${spreadsheetApiKey}`
    )
    .pipe(map((spreadsheet: Spreadsheet) => spreadsheet));
  }
}

