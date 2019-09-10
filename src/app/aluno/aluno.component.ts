import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlunoServiceService } from './aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  aluno: any;
  alunos: any[] = [];

  constructor(private service: AlunoServiceService) { }

  ngOnInit() {
    this.aluno = new Object();
    this.alunos = this.service.getAlunos();
  }

  onSubmit(formulario: NgForm) {
    if (formulario.valid) {
      this.aluno.id =  
      Math.random().toString(36).substring(2, 15)
        + Math.random().toString(36).substring(2, 15);
      this.service.salvar(this.aluno);
      this.aluno = new Object();
      this.alunos = this.service.getAlunos();
    }
  }
}
