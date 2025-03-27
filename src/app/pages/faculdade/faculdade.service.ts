import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaculdadeService {
  disciplinaUrl: string = 'https://67e4bd942ae442db76d56458.mockapi.io/faculdade/faculdade-lista/disciplinas';

  constructor(private http: HttpClient) {}

  listar(): Promise<any> {
    return firstValueFrom(this.http.get(this.disciplinaUrl)).then(
      (response: any) => {
        return response;
      }
    );
  }
}