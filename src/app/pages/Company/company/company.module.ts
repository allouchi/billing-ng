import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from '../Read/companies/companies.component';
import { CompanyListComponent } from '../Read/company-list/company-list.component';
import { CompanyItemComponent } from '../Read/company-item/company-item.component';
import { CompanyPageComponent } from '../Create/company-page/company-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyListComponent,
    CompanyItemComponent,
    CompanyPageComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [CompaniesComponent],
})
export class CompanyModule {}
