import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { CompanyModule } from 'src/app/pages/Company/company/company.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutRoutingModule, CompanyModule],
})
export class LayoutModule {}
