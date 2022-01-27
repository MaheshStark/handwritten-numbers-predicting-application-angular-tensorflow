import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

const routes: Routes =[
  { path: '', redirectTo: '/prediction', pathMatch: 'full'},
  { path:'prediction', component: DashboardComponent},

];



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) ,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
