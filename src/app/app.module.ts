import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HeaderComponent } from './todo-list/components/header/header.component';
import { TodoInputAddItensComponent } from './todo-list/components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoButtonDeleteAllComponent } from './todo-list/components/todo-button-delete-all/todo-button-delete-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoListComponent,
    HeaderComponent,
    TodoInputAddItensComponent,
    TodoButtonDeleteAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
