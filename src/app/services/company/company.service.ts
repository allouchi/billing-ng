import { Injectable, OnInit } from '@angular/core';
import { Company } from '../../domains/Company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../utils/AppSettings';

@Injectable({
  providedIn: 'root',
})
export class CompanyService implements OnInit {
  companyUrl: string = 'api/companies';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  findBySiret(siret: string): Observable<Company> {
    const url = `${AppSettings.API_ENDPOINT}/${this.companyUrl}/${siret}`;
    return this.http.get<Company>(url);
  }

  findAll(): Observable<Company[]> {
    const url = `${AppSettings.API_ENDPOINT}/${this.companyUrl}`;
    return this.http.get<Company[]>(url);
  }
}
