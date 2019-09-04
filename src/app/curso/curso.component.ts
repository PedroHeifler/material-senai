import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CursoService } from './curso.service';



@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: any;
  cursos: any = [];

  constructor(private service: CursoService) {
    this.cursos = service.getCurso(this.curso.id);
  }

  ngOnInit() { }

  onSubmitCurso(dados: NgForm) {
    if (dados.valid) {
        this.curso.id = Math.random().toString(36).substring(2, 15)
        + Math.random().toString(36).substring(2, 15);
      this.service.saveCurso(dados);
    }
  }
}
