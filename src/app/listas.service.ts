import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ListasService {

  alunos: any = [{
    nome: null,
    cpf: null,
    cursoAluno: null 
  }];

  cursos: any = [{
    nome: null,
    descricao: null,
    emais: null 
  }];

  constructor() { }
  
  getCursos(){

  }
  

  onSubmitAluno(dados: NgForm) {
    this.alunos.push({nome: this.alunos.nome, cpf: this.alunos.cpf, cursoAluno: this.alunos.cursoAluno})
  }

  onSubmitCurso(dados: NgForm) {
  }
}
