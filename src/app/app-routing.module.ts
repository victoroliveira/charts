import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { DashboardComponent }           from './dashboard/dashboard.component';
import { CrimeserverListComponent }     from './crimeserver/crimeserver-list/crimeserver-list.component';
import { CrimeserverDetailsComponent }  from './crimeserver/crimeserver-details/crimeserver-details.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details', component: CrimeserverDetailsComponent},
  {path: 'list', component: CrimeserverListComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
