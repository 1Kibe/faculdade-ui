import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Professor } from '../../core/models/professor.model';
import { DATA } from 'src/app/pages/professor/data';

@Component({
  selector: 'app-professor-lista',
  templateUrl: './professor-lista.component.html',
  styleUrls: ['./professor-lista.component.css']
})
export class ProfessorListaComponent implements OnInit {
  professores: Professor[] = [];
  loading: boolean = true;
  msgs: Message[] = [];

  ngOnInit(): void {
    // Simula carregamento de dados
    setTimeout(() => {
      this.professores = DATA;

      this.loading = false;
    }, 1500);
  }
}
