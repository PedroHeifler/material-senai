import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoServiceService } from '../aluno/aluno.service';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css']
})
export class AlunoDetailComponent implements OnInit {

  aluno: any = new Object();
  constructor(private route: ActivatedRoute,
    private alunoService: AlunoServiceService
  ) {}


  ngOnInit(): void {
    this.getCurso();
  }
  
  getCurso(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.aluno = this.alunoService.getAluno(id);
  }

}
