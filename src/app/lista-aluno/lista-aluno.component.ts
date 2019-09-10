import { Component, OnInit } from '@angular/core';
import { AlunoServiceService } from '../aluno/aluno.service';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {

  aluno: any;
  alunos: any[] = [];

  constructor(private service: AlunoServiceService) { }

  ngOnInit() {
    this.aluno = new Object();
    this.alunos = this.service.getAlunos();
  }

}
