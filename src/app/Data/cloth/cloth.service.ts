import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Spreadsheet } from './../../Domain/models/spreadsheet.model';

@Injectable({
  providedIn: 'root'
})
export class ClothService {

  constructor(private httpClient: HttpClient) { }
  getSpreetsheet(): Observable<Spreadsheet> {
    const spreadsheetId: string = '1lCMTu2M9GSVUQW80PKm8x1ImhWbn-MK6QP5y3qYFMqs';
    const spreadsheetName: string = 'Inventario';
    const spreadsheetApiKey: string = 'AIzaSyC29kzY33O0UgKqMpH-zbhO_e_rQjooUNc';
    return this.httpClient
    .get<Spreadsheet>(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${spreadsheetName}?key=${spreadsheetApiKey}`)
    .pipe(map((spreadsheet: Spreadsheet) => spreadsheet));
  }
}

