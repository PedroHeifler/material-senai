import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private curso: any[] = []; 

  constructor() { }

  saveCurso(dados: NgForm) {
    this.curso.push(dados.value)
  }

  getCurso() {
    return this.curso;
  }
}
