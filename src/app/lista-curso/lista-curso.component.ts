import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso/curso.service';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {

  curso: any;
  cursos: any[] = [];

  constructor(private service: CursoService) { }

  ngOnInit() {
    this.curso = new Object();
    this.cursos = this.service.getCursos();
  }

}
