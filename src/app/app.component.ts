import { Component } from '@angular/core';
import { CalculadoraService } from './calculadora';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers:[
    CalculadoraService
  ]
})
export class AppComponent {
}
