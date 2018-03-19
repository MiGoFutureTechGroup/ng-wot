import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { MaterialsComponent } from '../components/materials/materials.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const routes: Routes = [{
	path: 'home',
	component: HomeComponent
}, {
	path: 'materials',
	component: MaterialsComponent,
	children: [{
		path: ':id',
		component: MaterialsComponent
	}]
}, {
	path: '',
	component: WelcomeComponent,
	pathMatch: 'full'
}, {
	path: '**',
	component: PageNotFoundComponent
}]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule { }
