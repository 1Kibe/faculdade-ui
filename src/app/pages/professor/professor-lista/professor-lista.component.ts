import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/pages/professor/data';

@Component({
  selector: 'app-professor-lista',
  templateUrl: './professor-lista.component.html'
})
export class ProfessorListaComponent implements OnInit {

  professores: any[] = [];

  ngOnInit(): void {
    // Simulação de dados - você pode substituir por uma chamada de serviço futuramente
    this.professores = DATA;
  }
}
