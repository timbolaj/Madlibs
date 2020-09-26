import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';

import { StoreModule } from '@ngrx/store';
import { formReducer } from './form.reducer';
import { MadLibTextComponent } from './mad-lib-text/mad-lib-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FormComponent,
    NavComponent,
    MadLibTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ form: formReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
