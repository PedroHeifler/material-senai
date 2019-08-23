import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: any = [{
    nome: null,
    cpf: null,
    cursoAluno: null 
  }];

  constructor() { }

  ngOnInit() {

  }

  onSubmitAluno(dados: NgForm) {
    this.alunos.push({nome: this.alunos.nome, cpf: this.alunos.cpf, cursoAluno: this.alunos.cursoAluno})
    console.log(this.alunos);
  }
}
