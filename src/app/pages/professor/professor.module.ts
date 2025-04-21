import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
import { ProfessorListaComponent } from './professor-lista/professor-lista.component';
import { FormsModule } from '@angular/forms';
import { ProfessorRoutingModule } from './professor.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfessorRoutingModule
  ],
  declarations: [
    ProfessorCadastroComponent,
    ProfessorListaComponent
    ]
})
export class ProfessorModule { }
