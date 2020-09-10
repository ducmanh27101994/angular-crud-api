import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './products/list/list.component';
import {AddComponent} from './products/add/add.component';
import {EditComponent} from './products/edit/edit.component';
import {ShowComponent} from './products/show/show.component';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', component: ListComponent},
  {path: 'products/create', component: AddComponent},
  {path: 'products/:id', component: EditComponent},
  {path: 'products/show/:id', component: ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
