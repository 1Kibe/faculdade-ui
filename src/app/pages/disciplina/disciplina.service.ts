
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Disciplina } from '../core/models/disciplina.model';
@Injectable({
  providedIn: 'root',
})
export class DisciplinaService {
  disciplinaUrl: string = '';

  constructor(private http: HttpClient) {
    this.disciplinaUrl =
    'https://67e4bd942ae442db76d56458.mockapi.io/disciplinas';
  }

  listar(): Promise<any> {
    return firstValueFrom(this.http.get(this.disciplinaUrl)).then(
      (response: any) => {
        return response;
      }
    );
  }

  adicionar(obj: Disciplina): Promise<Disciplina> {
    return firstValueFrom(this.http.post<Disciplina>(this.disciplinaUrl, obj));
  }

  buscarPorId(id: number) {
    return firstValueFrom(this.http.get(`${this.disciplinaUrl}/${id}`)).then(
      (response) => response as any
    );
  }

  atualizar(obj: Disciplina): Promise<Disciplina> {
    return firstValueFrom(
      this.http.put<Disciplina>(`${this.disciplinaUrl}/${obj.id}`, obj)
    ).then((response) => response as Disciplina);
  }
}
