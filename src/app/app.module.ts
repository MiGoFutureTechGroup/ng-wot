import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { PopupModule } from './modules/popup/popup.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { MaterialDetailComponent } from './components/material-detail/material-detail.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
	declarations: [
		AppComponent,
		MaterialsComponent,
		MaterialDetailComponent,
		HomeComponent,
		NavbarComponent,
		PageNotFoundComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		PopupModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
