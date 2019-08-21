import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

    cursoAtual: string = " ";

    cursos: any = {
      nome: null,
      descricao: null,
      email: null
    }

  constructor() { }

  ngOnInit() {
  }
  CursoAlternado(valor:string){
    if (valor == 'Desenvolvimento'){
      return this.cursoAtual = valor;
    }
    if (valor == 'redes') {
      return this.cursoAtual = valor;
    }
    return this.cursoAtual = " ";
   }

   onSubmit(dados: NgForm) {
    console.log(dados);
    console.log("----Valores do Form----");
    console.log(dados.form.value);

    console.log("Valor do Objeto");
    console.log(this.cursos);
    
    
    
   }
}
