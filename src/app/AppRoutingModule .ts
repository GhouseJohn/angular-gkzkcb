
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import{FoodComponent} from './FoodComponent'
import { HelloComponent } from './hello.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: FoodComponent },
  { path: 'heroes',        component: HelloComponent },
  //{ path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}