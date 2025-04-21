import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';
import { AlunosCadastroComponent } from './alunos-cadastro/alunos-cadastro.component';
import { AlunosRoutingModule } from './alunos.routing';
import { PrimengModule } from 'src/app/primeng.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AlunosListaComponent,
    AlunosCadastroComponent
  ]
})
export class AlunosModule { }
