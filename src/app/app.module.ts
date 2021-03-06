import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatButtonModule} from '@angular/material/button';
import{MaterialModule} from './material-module'
import{FoodComponent} from './FoodComponent'
//import{HomeComponent} from '.././Home/HomeComponent'
import{HomeComponent} from './Home/HomeComponent'
import{PageNotfoundComponent} from './Home/PageNotFoundComponent'


import{AppRoutingModule} from './AppRoutingModule '

import { RouterModule, Routes } from '@angular/router';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 






const appRoutes: Routes = [
  { path: 'crisis-center', component: FoodComponent },
  { path: 'heroes',        component: HelloComponent },
  { path: '',        component: HomeComponent },
 // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotfoundComponent }
];
@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ,MatButtonModule,MaterialModule,
  BrowserAnimationsModule,RouterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  declarations: [ AppComponent, HelloComponent,FoodComponent,HomeComponent,PageNotfoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
