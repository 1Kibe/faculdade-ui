
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card'; 

@NgModule({

  exports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    CardModule 
  ]
})
export class PrimengModule { }
