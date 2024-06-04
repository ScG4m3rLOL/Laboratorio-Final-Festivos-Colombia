import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Festivo } from '../entities/festivo';

@Injectable({
  providedIn: 'root',
})
export class FestivoService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.URL_BACKEND}${environment.PATH_FESTIVOS}`;
  }

  public verifyHoliday(date: Date): Observable<string> {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const urlT = `${this.url}verificar/${year}/${month}/${day}`;

    return this.http.get(urlT, { responseType: 'text' });
  }

  public getFestivos(year: number): Observable<Festivo[]> {
    const urlT = `${this.url}listar/${year}`;
    return this.http.get<Festivo[]>(urlT);
  }
}
