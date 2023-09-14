import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { appReducer } from './Domain/state/app.state';
import { AppRoutingModule } from './app-routing.module';

import { CardComponent } from './UI/widgets/card/card.component';
import { ClothEffect } from './Domain/state/cloth/cloth.effect';
import { MainComponent } from './UI/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer, {}),
    EffectsModule.forRoot([ ClothEffect ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
