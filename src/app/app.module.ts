import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatButtonModule} from '@angular/material/button';
import{MaterialModule} from './material-module'
import{FoodComponent} from './FoodComponent'
import{HomeComponent} from './Home/HomeComponent'
import{PageNotfoundComponent} from './Home/PageNotFoundComponent'

import{ListofFoodComponent} from './FoodMenu/ListofFoodComponent'
import{AppRoutingModule} from './AppRoutingModule '

import { RouterModule, Routes } from '@angular/router';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

//import{CompoenentRegModule} from './ComponentRegModule'




const appRoutes: Routes = [
  { path: 'crisis-center', component: FoodComponent },
  { path: 'ListOfFood', component: ListofFoodComponent },
  { path: 'heroes',        component: HelloComponent },
  { path: '',        component: HomeComponent },

  { path: '**', component: PageNotfoundComponent }
];
@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ,MatButtonModule,MaterialModule,
  BrowserAnimationsModule,RouterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  declarations: [ AppComponent, HelloComponent,FoodComponent,HomeComponent,PageNotfoundComponent,ListofFoodComponent],
 // declarations: [ AppComponent,CompoenentRegModule],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
