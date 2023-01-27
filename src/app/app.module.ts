import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraModule, CalculadoraService } from './calculadora';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalculadoraModule,
  ],
  providers: [
    CalculadoraService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
