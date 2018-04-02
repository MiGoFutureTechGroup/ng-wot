import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { UsersComponent } from '../components/users/users.component';
import { UserDetailComponent } from '../components/users/user-detail.component';
import { UserTypeComponent } from '../components/users/user-type.component';
import { MaterialsComponent } from '../components/materials/materials.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { WarehouseComponent } from '../components/warehouse/warehouse.component';
import { QuotationComponent } from '../components/purchase/quotation.component';
import { OrderComponent as PurchaseOrderComponent } from '../components/purchase/order.component';
import { CompanyComponent } from '../components/company/company.component';
import { MaterialLinkComponent } from '../components/materials/material-link.component';
import { MaterialTableComponent } from '../components/materials/material-table.component';
import { WarehouseTableComponent } from '../components/warehouse/warehouse-table.component';
import { InstockComponent } from '../components/warehouse/instock.component';
import { ExstockComponent } from '../components/warehouse/exstock.component';
import { WarehouseCheckComponent } from '../components/warehouse/warehouse-check.component';

// 测试用导入
import { LoginComponent } from '../modules/session/components/login/login.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'materials',
    component: MaterialsComponent,
    children: [{
      path: 'link',
      component: MaterialLinkComponent,
    }, {
      path: '',
      component: MaterialTableComponent,
    }]
  },
  {
    path: 'purchase',
    children: [
      {
        path: 'new',
        children: [
          {
            path: 'quotation',
            component: QuotationComponent,
          },
          {
            path: 'order',
            component: PurchaseOrderComponent,
          }
        ]
      },
      {
        path: 'add',
        children: [
          {
            path: 'provider',
            component: CompanyComponent,
          }
        ]
      }
    ]
  },
  {
    path: 'warehouse',
    component: WarehouseComponent,
    children: [
      {
        path: 'instock',
        component: InstockComponent,
      },
      {
        path: 'exstock',
        component: ExstockComponent,
      },
      {
        path: 'check',
        component: WarehouseCheckComponent,
      },
      {
        path: '',
        component: WarehouseTableComponent,
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      //{ enableTracing: true, }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
