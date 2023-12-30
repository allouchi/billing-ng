import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientPageComponent } from '../Create/client-page/client-page.component';
import { ClientItemComponent } from '../Read/client-item/client-item.component';
import { ClientListComponent } from '../Read/client-list/client-list.component';
import { ClientsComponent } from '../Read/clients/clients.component';

@NgModule({
  declarations: [
    ClientPageComponent,
    ClientItemComponent,
    ClientListComponent,
    ClientsComponent,
  ],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}
