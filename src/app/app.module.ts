import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './pages/Company/company/company.module';
import { ClientModule } from './pages/Client/client/client.module';
import { HeaderComponent } from './components/Header/header/header.component';
import { BodyComponent } from './components/Body/body/body.component';
import { FooterComponent } from './components/Footer/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, CompanyModule, ClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
