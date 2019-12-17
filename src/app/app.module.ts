import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddToDoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SplashComponent } from './components/pages/splash/splash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WchNgEditModule } from '@ibm-wch-sdk/ng-edit';
import { WchNgBootstrapComponentsModule } from '@dx-samples/creative-bootstrap-components';
import { CommonThemeModule } from '@dx-samples/common-ui-components';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddToDoComponent,
    AboutComponent,
    SplashComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    WchNgEditModule.forRoot(),
    WchNgBootstrapComponentsModule,
    CommonThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
