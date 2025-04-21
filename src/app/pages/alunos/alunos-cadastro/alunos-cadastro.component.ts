import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from 'src/app/pages/alunos/alunos.service'; 
import { Aluno } from '../../core/models/aluno.model'; 
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-alunos-cadastro',
  templateUrl: './alunos-cadastro.component.html',
  styleUrls: ['./alunos-cadastro.component.css']
})
export class AlunosCadastroComponent implements OnInit {
  form!: FormGroup;
  aluno = new Aluno();
  salvando: boolean = false;
  carregando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private alunosService: AlunoService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [this.aluno.nome, [Validators.required, Validators.minLength(3)]],
      cpf: [this.aluno.cpf, [Validators.required, Validators.pattern(/^\d{11}$/)]]
    });
  }

  cadastrarAluno() {
    if (this.form.invalid) {
      return;
    }

    this.salvando = true;
    this.carregando = true;

    this.aluno = this.form.value;

    this.alunosService.adicionarAluno(this.aluno).then((res) => {
      console.log('Aluno cadastrado com sucesso', res);

      setTimeout(() => {
        this.salvando = false;
        this.carregando = false;
        this.messageService.add({ severity: 'success', summary: 'Aluno cadastrado com sucesso!' });
        this.form.reset();
      }, 1500);
    }).catch((err) => {
      console.error('Erro ao cadastrar aluno', err);
      this.salvando = false;
      this.carregando = false;
      this.messageService.add({ severity: 'error', summary: 'Erro ao cadastrar aluno' });
    });
  }
}
