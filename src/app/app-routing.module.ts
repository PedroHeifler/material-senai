import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso/curso.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';
import { ListaAlunoComponent } from './lista-aluno/lista-aluno.component';
import { ListaCursoComponent } from './lista-curso/lista-curso.component';

const routes: Routes = [
  { path: 'cursos', component: CursoComponent },
  { path: 'listaCursos', component: ListaCursoComponent },
  { path: 'alunos', component: AlunoComponent },
  { path: 'listaAlunos', component: ListaAlunoComponent },
  { path: 'cursodetail/:id', component: CursoDetailComponent },
  { path: 'alunodetail/:id', component: AlunoDetailComponent },
  { path: '', redirectTo: '/cursos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
