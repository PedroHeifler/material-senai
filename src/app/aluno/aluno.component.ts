import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlunoServiceService } from './aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: any = [];
  
  constructor(private service: AlunoServiceService) { }

  ngOnInit() {
    this.alunos = this.service.getAluno();
  }

  onSubmitAluno(dados: NgForm) {
    this.service.saveAluno(dados)
  }
}
