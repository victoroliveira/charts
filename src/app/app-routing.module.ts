import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { DashboardComponent }       from './dashboard/dashboard.component';
import { CrimeserverListComponent } from './crimeserver/crimeserver-list/crimeserver-list.component';

const routes: Routes = [
  {path: 'list', component: CrimeserverListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
