import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/domains/Company';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  company?: Company;
  siret: string = '85292702900011';

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit() {
    this.companyService.findAll().subscribe({
      next: (v) => this.onSuccess(v),
      error: (e) => this.onError(e),
      complete: () => this.complete('complete'),
    });
  }

  onSuccess(response: any) {
    this.company = response;
  }

  onError(error: any) {
    console.log(error);
  }
  complete(complete: any) {
    console.log(complete);
  }
}
