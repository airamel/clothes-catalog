import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { appReducer } from './Domain/state/app.state';
import { AppRoutingModule } from './app-routing.module';
import { ClothEffect } from './Domain/state/cloth/cloth.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer, {}),
    EffectsModule.forRoot([ ClothEffect ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
