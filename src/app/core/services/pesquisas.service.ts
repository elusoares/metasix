import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

export interface Resultado {
  objectId: string;
  position: number;
  createdAt: string;
  updatedAt: string;
  answer: string;
  group: string;
  question: string;
  approved: string;
  visible: string;
}

@Injectable({
  providedIn: 'root'
})
export class PesquisasService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPesquisas() {
    const headers = new HttpHeaders().set('X-Parse-Application-Id', 'br.com.metasix.poc');
    const params = new HttpParams().set('skip', '0').set('limit', '5');
    const options = {headers, params};
    return this.httpClient.get<Resultado[]>('https://poc.metasix.solutions/parse/classes/FAQ?skip=0&limit=5', options)
      .pipe(
        map((res) => {
          const resultado: Resultado[] = res['results'];
          return resultado;
        })
      )
      ;
  }
}
