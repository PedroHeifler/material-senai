import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso/curso.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';

const routes: Routes = [
  { path: 'cursos', component: CursoComponent },
  { path: 'alunos', component: AlunoComponent },
  { path: 'cursodetail/:id', component: CursoDetailComponent },
  { path: '', redirectTo: '/cursos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
