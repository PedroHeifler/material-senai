import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursoAtual: string = " ";

  cursos: any = [{
    nome: null,
    descricao: null,
    email: null
  }]

  constructor() { }

  ngOnInit() {
  }

  onSubmit(dados: NgForm) {
    this.cursos.push({ nome: this.cursos.nome, descricao: this.cursos.descricao, email: this.cursos.email })
    console.log(this.cursos);
  }
}
