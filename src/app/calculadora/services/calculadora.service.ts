import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {
  providers: [
    CalculadoraService
  ]

  //Definir constantes para identificar 4 operações da calculadora
  /**Static facilita o acesso ao atributo. podemos chamar o nome da classe sem instanciar.
   * Readonly serve para não permitir que os valores da variavel não possam mudar, logo, constante */

  static readonly SOMA: string ='+';
  static readonly SUBT: string ='-';
  static readonly MULT: string ='*';
  static readonly DIVI: string ='/';
  constructor() { }

  /*criar o metodo para fazer as operações de dois numeros da aplicação*/

  calcular(num1: number, num2: number, operação: string): number{
    let resultado: number; // Cria uma variavel para armazenar o resultado

    switch(operação){

      case CalculadoraService.SOMA: // Caso a operação escolhida seja SOMA
      resultado= num1+num2;
      break;

      case CalculadoraService.SUBT: // Caso a operação escolhida seja SUBTRAÇÃO
      resultado= num1-num2;
      break;

      case CalculadoraService.MULT: // Caso a operação escolhida seja MULTIPLICAÇÃO
      resultado= num1*num2;
      break;

      case CalculadoraService.DIVI: // Caso a operação escolhida seja DIVISÃO
      resultado= num1/num2;
      break;
      default:
        resultado=0;
    }
    return resultado;
  }
}
