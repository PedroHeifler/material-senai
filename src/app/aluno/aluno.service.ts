import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AlunoServiceService {

  private alunos: String[] = [];

  constructor() { }

  saveAluno(dados: NgForm) {
    this.alunos.push(dados.value);
  }
  
  getAluno() {
    return this.alunos;
  }
}
