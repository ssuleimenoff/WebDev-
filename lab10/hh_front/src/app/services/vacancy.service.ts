import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../interfaces/vacancy.interface';

@Injectable({
  providedIn: 'root',
})
export class VacancyService {
  constructor(private http: HttpClient) {}

  getVacanciesByCompanyId(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`/api/companies/${companyId}/vacancies/`);
  }
}
