import {NgModule} from '@angular/core';



import{HomeComponent} from './Home/HomeComponent'
import{PageNotfoundComponent} from './Home/PageNotFoundComponent'
import { HelloComponent } from './hello.component';
import{FoodComponent} from './FoodComponent'
import{ListofFoodComponent} from './FoodMenu/ListofFoodComponent'



@NgModule({
exports:[
  HomeComponent,PageNotfoundComponent,HelloComponent,FoodComponent,ListofFoodComponent
]

})


export class CompoenentRegModule{}