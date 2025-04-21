import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html',
  styleUrls: ['./professor-cadastro.component.css'],
  providers: [MessageService]
})
export class ProfessorCadastroComponent implements OnInit {
  form!: FormGroup;
  carregando: boolean = false;
  salvando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.carregando = true;

    // Simula carregamento de dados para edição
    setTimeout(() => {
      this.form = this.fb.group({
        nome: ['', Validators.required],
        cpf: ['', Validators.required]
      });

      this.carregando = false;
    }, 1000);
  }

  salvar() {
    if (this.form.invalid) return;

    this.salvando = true;
    this.carregando = true;

    // Simula chamada de API
    setTimeout(() => {
      this.salvando = false;
      this.carregando = false;
      this.messageService.add({ severity: 'success', summary: 'Salvo com sucesso!' });
      this.form.reset();
    }, 1500);
  }
}
