import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { DisplayComponent } from './display/display.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: "restaurants", component: HomeComponent},
  {path: "restaurants/new", component: CreateComponent},
  {path: "restaurants/:id", component: DisplayComponent},
  {path: "restaurants/review/:id", component: AddComponent},
  {path: "restaurants/edit/:id", component: EditComponent},
  {path: '', pathMatch: 'full', redirectTo: 'restaurants'},
  {path: '**', pathMatch: 'full', redirectTo: 'restaurants'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
