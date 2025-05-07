import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DisciplinaService } from '../disciplina.service';
import { Disciplina } from '../../core/models/disciplina.model';


@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.css']
})
export class DisciplinaCadastroComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private disciplinaService: DisciplinaService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      descricao: ['', Validators.required]
    });
  }

  salvar() {
    if (this.form.invalid) return;

    this.spinner.show();

    const novaDisciplina: Disciplina = {
      descricao: this.form.value.descricao
    };

    this.disciplinaService.adicionar(novaDisciplina).then(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Disciplina',
        detail: 'Cadastrada com sucesso!'
      });

      this.spinner.hide();
      this.router.navigate(['/disciplinas']);
    });
  }
}
