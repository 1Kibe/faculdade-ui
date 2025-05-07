import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Professor } from '../../core/models/professor.model';
import { ProfessorService } from '../professor.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-professor-lista',
  templateUrl: './professor-lista.component.html',
  styleUrls: ['./professor-lista.component.css']
})
export class ProfessorListaComponent implements OnInit {
  professores: Professor[] = [];
  msgs: Message[] = [];

  constructor(
    private professorService: ProfessorService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show(); // Mostra o spinner global

    this.professorService.listar()
      .then(data => {
        this.professores = data;
      })
      .catch(() => {
        this.msgs.push({ severity: 'error', summary: 'Erro', detail: 'Erro ao carregar professores' });
      })
      .finally(() => {
        this.spinner.hide(); // Esconde o spinner
      });
  }
}
