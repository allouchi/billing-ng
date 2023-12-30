import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompaniesComponent } from '../Read/companies/companies.component';
import { CompanyItemComponent } from '../Read/company-item/company-item.component';
import { CompanyListComponent } from '../Read/company-list/company-list.component';
import { CompanyPageComponent } from '../Create/company-page/company-page.component';

@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyItemComponent,
    CompanyListComponent,
    CompanyPageComponent,
  ],
  imports: [CommonModule, CompanyRoutingModule],
})
export class CompanyModule {}
