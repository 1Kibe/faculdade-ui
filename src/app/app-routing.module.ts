import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'disciplinas',
    loadChildren: () => 
      import('./pages/disciplina/disciplina.module').then((m) => m.DisciplinaModule)
  },
  {
    path: 'alunos',
    loadChildren: () =>
      import('./pages/alunos/alunos.module').then(m => m.AlunosModule)
  },
  {
    path: 'professores',
    loadChildren: () =>
      import('./pages/professor/professor.module').then(m => m.ProfessorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }