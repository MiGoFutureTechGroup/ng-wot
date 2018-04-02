import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
// Modules
import { AppRoutingModule } from './modules/app-routing.module';
import { MaterialModule } from './modules/material.module';
// Components
import { AppComponent } from './app.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { MaterialDetailComponent } from './components/materials/material-detail.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersComponent } from './components/users/users.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserDetailComponent } from './components/users/user-detail.component';
import { UserTypeComponent } from './components/users/user-type.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { OrderComponent as PurchaseOrderComponent } from './components/purchase/order.component';
import { QuotationComponent } from './components/purchase/quotation.component';
import { CompanyComponent } from './components/company/company.component';
import { MaterialTypeComponent } from './components/materials/material-type.component';
import { MaterialLinkComponent } from './components/materials/material-link.component';
import { MaterialTableComponent } from './components/materials/material-table.component';
// Services
import { UserService } from './services/user.service';
import { SessionModule } from './modules/session/session.module';
import { MaterialDetailResolverService } from './components/materials/services/material-detail-resolver.service';
import { MaterialService } from './services/material.service';
import { CompanyService } from './services/company.service';
import { WarehouseTableComponent } from './components/warehouse/warehouse-table.component';
import { InstockComponent } from './components/warehouse/instock.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialsComponent,
    MaterialDetailComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    FooterComponent,
    WelcomeComponent,
    UsersComponent,
    UserDetailComponent,
    UserTypeComponent,
    PurchaseComponent,
    QuotationComponent,
    PurchaseOrderComponent,
    CompanyComponent,
    MaterialTypeComponent,
    WarehouseComponent,
    MaterialLinkComponent,
    MaterialTableComponent,
    WarehouseTableComponent,
    InstockComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SessionModule,
    AppRoutingModule,
    MaterialModule,
  ],

  entryComponents: [
    UserDetailComponent,
    UserTypeComponent,
    MaterialDetailComponent,
    MaterialTypeComponent,
  ],

  providers: [
    UserService,
    MaterialDetailResolverService,
    MaterialService,
    CompanyService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
