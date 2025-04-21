import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Professor } from 'src/app/pages/core/models/professor.model'; // ajuste o path se necessário

@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html',
  styleUrls: ['./professor-cadastro.component.css']
})
export class ProfessorCadastroComponent implements OnInit {
  professor = new Professor(); // Criação da instância do Professor

  constructor() { }

  ngOnInit(): void {
    // Inicializações adicionais, se necessário.
  }

  salvar(form: NgForm) {
    console.log(form);
  }

  cadastrarProfessor(form: NgForm) {
    console.log(this.professor);  // Aqui o professor será exibido no console

    // Lógica de cadastro (descomente e implemente a chamada à service quando necessário)
    // this.professorService.adicionar(this.professor).then(res => {
    //   console.log('Professor cadastrado com sucesso', res);
    // });
  }
}
