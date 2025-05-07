import { Injectable } from '@angular/core';
import { Professor } from '../core/models/professor.model';
import { DATA } from './data'; // Supondo que você esteja simulando com um mock

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor() {}

  // Método para listar os professores, retorna uma promise
  listar(): Promise<Professor[]> {
    return new Promise((resolve) => {
      // Simulando um delay, como se estivesse fazendo uma requisição HTTP
      setTimeout(() => {
        resolve(DATA); // Retorna os dados simulados
      }, 1000); // Delay de 1 segundoa
    });
  }
}
