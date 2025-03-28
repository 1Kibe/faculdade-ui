import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from 'src/app/primeng.module';
import { FaculdadeCadastroComponent } from './faculdade-cadastro/faculdade-cadastro.component';
import { FaculdadeListaComponent } from './faculdade-lista/faculdade-lista.component';
import { FaculdadeRoutingModule } from './faculdade.routing';



@NgModule({
  imports: [
    CommonModule,
    FaculdadeRoutingModule,
    PrimengModule
  
  ],
  declarations: [
    FaculdadeCadastroComponent,
    FaculdadeListaComponent
  ]
})
export class FaculdadeModule { }