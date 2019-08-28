import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CursoService } from './curso.service';



@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: any = [];
  
  constructor(private service: CursoService) { 
    this.cursos = service.getCurso();
  }
  
  ngOnInit() { }

  onSubmitCurso(dados: NgForm) {
    this.service.saveCurso(dados);
  }
}
