import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AlunoServiceService {

  alunos: any[] = [];

  constructor() { }

  salvar(aluno: any) {
    this.alunos.push(aluno);
  }

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: string): any {
    return this.alunos.find(aluno => aluno.id == id);
  }
}
