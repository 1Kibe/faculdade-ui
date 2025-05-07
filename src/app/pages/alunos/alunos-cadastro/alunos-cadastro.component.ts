import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos-cadastro',
  templateUrl: './alunos-cadastro.component.html',
  styleUrls: ['./alunos-cadastro.component.css']
})
export class AlunosCadastroComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern('[0-9]{11}')]]
    });
  }

  salvar() {
    if (this.form.invalid) return;

    this.spinner.show();

    setTimeout(() => {
      // Aqui simula o salvamento e mostra o toast
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Aluno salvo com sucesso!'
      });

      this.spinner.hide();
      this.router.navigate(['/alunos']);
    }, 1500); // Mantido só para simular um tempo de salvamento (não é do toast)
  }
}
