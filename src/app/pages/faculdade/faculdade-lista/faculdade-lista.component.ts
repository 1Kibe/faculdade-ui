import { Component, OnInit } from '@angular/core';
import { FaculdadeService } from '../faculdade.service';

@Component({
  selector: 'app-faculdade-lista',
  templateUrl: './faculdade-lista.component.html',
  styleUrls: ['./faculdade-lista.component.css']
})
export class FaculdadeListaComponent implements OnInit {
  
  disciplinas = [];
  
  constructor(
    private faculdadeService: FaculdadeService
  ) { }

  ngOnInit() {
    this.carregarDisciplinas();
  }

  carregarDisciplinas(){
    this.faculdadeService.listar().then((obj) => {
      this.disciplinas = obj;
    });
  }

}