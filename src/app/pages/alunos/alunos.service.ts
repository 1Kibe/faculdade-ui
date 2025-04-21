import { Injectable } from '@angular/core';
import { DATA } from './data';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos = [...DATA];

  getAlunos() {
    return this.alunos;
  }

  // Método correto para adicionar um aluno
  adicionarAluno(aluno: any) {
    aluno.idaluno = this.alunos.length + 1;
    this.alunos.push(aluno);
    return Promise.resolve(aluno);  // Retornando um Promise para simular o cadastro assíncrono
  }
}
