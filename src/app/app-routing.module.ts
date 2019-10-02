import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonInfoComponent } from './person-info/person-info.component';
import { SearchAllPersonComponent } from './search-all-person/search-all-person.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/all' , pathMatch: 'full' },
  { path:'all',component: SearchAllPersonComponent},
  {path:'firstName', component:PersonInfoComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
