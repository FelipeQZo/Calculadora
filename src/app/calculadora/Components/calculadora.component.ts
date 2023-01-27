import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],

  providers:[
    CalculadoraService
  ]
})

export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private operacao: string;
  private resultado: number;

  constructor(private calculadoraService: CalculadoraService){}


  /*O NgOnInIt será o primeiro método rodado na aplicação,
   logo, define ele para zerar as variaveis.*/
  ngOnInit(): void {
    this.limpar();
}


// metodo para limpar os dados da calculadora
limpar():void {
  this.numero1= '0'
  this.numero2= null;
  this.resultado= null;
  this.operacao=null;
}

adicionarNumero(numero:string): void{
  if(this.operacao ===null){
    this.numero1 = this.concatenarNumero(this.numero1, numero);
  }
  else{
    this.numero2 = this.concatenarNumero(this.numero2, numero);
  }

}

/**
 * Metodo para concatenar numero
 * caso seja mais de 1 algarismo
 */

concatenarNumero(numAtual: string, numConcat: string): string{
  if(numAtual==='0'|| numAtual=== null){  //condição verifica se primeiro valor digitado é relevante ou nulo
    numAtual='';
  }
  if(numConcat==='.'&& numAtual=== ''){   //condição verifica se primeiro valor digitado foi '.'
   return '0.';
  }
  if(numConcat==='.' && numAtual.indexOf('.')> -1){ // condição verifica se '.' foi digitado mais de uma vez
   return numAtual+numConcat;
  }

  return numAtual+ numConcat;
}

definirOperacao(operacao: string): void {
  // apenas define a operação caso não exista uma
  if (this.operacao === null) {
    this.operacao = operacao;
    return;
  }

  /* caso operação definida e número 2 selecionado,
     efetua o cálculo da operação */
  if (this.numero2 !== null) {
    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);
    this.operacao = operacao;
    this.numero1 = this.resultado.toString();
    this.numero2 = null;
    this.resultado = null;
  }
}

/* metodo executado quando apertar o botao de =, logo calcular */
calcular (): void {
  if(this.numero2===null){ // verifica se num2 é nulo, logo existe num1
     return
  }
  this.resultado = this.calculadoraService.calcular(
    parseFloat(this.numero1),
    parseFloat(this.numero2),
    this.operacao);
}

/* metodo para exibir na tela o valor do calculo */
 get display(): string{
  if(this.resultado !== null){
    return this.resultado.toString();
  }
  if(this.numero2 !== null){
    return this.numero2;
  }
  return this.numero1;

 }
}
