import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Aluno } from '../../core/models/aluno.model';
import { DATA } from '../data';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.css']
})
export class AlunosListaComponent implements OnInit {

  alunos: Aluno[] = [];
  carregando = true;
  msgs: Message[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: [''] // Exemplo, pode adicionar outros campos conforme necessário
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.alunos = DATA;
      this.carregando = false;
      this.msgs = [{ severity: 'success', summary: 'Dados carregados com sucesso!' }];
    }, 1500);
  }

  salvar() {
    if (this.form.valid) {
      console.log('Dados do formulário:', this.form.value);
      this.msgs = [{ severity: 'success', summary: 'Aluno salvo com sucesso!' }];
    } else {
      this.msgs = [{ severity: 'error', summary: 'Preencha corretamente o formulário' }];
    }
  }
}
