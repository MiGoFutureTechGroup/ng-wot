import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

// 用户自定义模块
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule } from './modules/material.module';

// 用户自定义组件
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
import { PurchaseComponent, QuotationComponent, PurchaseOrderComponent } from './components/purchase/purchase.component';

// 用户自定义服务
import { UserService } from './services/user.service';
import { SessionModule } from './modules/session/session.module';


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
    WarehouseComponent,
    QuotationComponent,
    PurchaseOrderComponent,
  ],
  imports: [
    // 浏览器
    BrowserModule,

    // 表单
    FormsModule,

    // 会话
    SessionModule,

    // 根路由
    AppRoutingModule,

    // Angular Material 界面
    MaterialModule,
  ],

  entryComponents: [
    UserDetailComponent,
    UserTypeComponent,
  ],

  providers: [
    UserService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
