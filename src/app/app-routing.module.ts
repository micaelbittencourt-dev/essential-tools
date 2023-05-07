import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { GridsterTestComponent } from './gridster/gridster-test.component';
import { PanelCardsComponent } from './panel-cards/panel-cards.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'todo', component: TodoListComponent},
  {path: 'gridster', component: GridsterTestComponent},
  {path: 'board', component: PanelCardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
