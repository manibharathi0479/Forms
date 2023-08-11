import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';


import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
