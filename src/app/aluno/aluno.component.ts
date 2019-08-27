import { Component, OnInit, Input } from '@angular/core';
import { ListasService } from '../listas.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    ListasService
  }
}
