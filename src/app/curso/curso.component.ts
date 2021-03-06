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
  cursos: any[] = [];

  constructor(private service: CursoService) { }

  ngOnInit() {
    this.curso = new Object();
    this.cursos = this.service.getCursos();
  }

  onSubmit(formulario: NgForm) {
    if (formulario.valid) {
      this.curso.id =  
      Math.random().toString(36).substring(2, 15)
        + Math.random().toString(36).substring(2, 15);
      this.service.salvar(this.curso);
      this.curso = new Object();
      this.cursos = this.service.getCursos();
      console.log(this.curso)
      console.log(this.cursos)
    }
  }
}
