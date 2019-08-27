import { Component, OnInit } from '@angular/core';
import { ListasService } from '../listas.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: any[] = [];
  listasService: ListasService

  constructor() { 
    this.listasService = new ListasService();
  }

  ngOnInit() {
    this.cursos = this.listasService.getCursos();
  }
}
