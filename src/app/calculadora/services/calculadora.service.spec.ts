import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';
import { CalculadoraModule } from '../calculadora.module';


describe('CalculadoraService', () => {
  let service: CalculadoraService;

  imports :[
    CalculadoraModule,
  ]

  providers: [
    CalculadoraService,
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
