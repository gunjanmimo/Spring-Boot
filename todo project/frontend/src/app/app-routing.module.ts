import { TodoComponent } from './todo/todo.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { RouteGuardService } from './services/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { SigninComponent } from './signin/signin.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: "welcome/:name", component: WelcomeComponent, canActivate: [RouteGuardService] },//route guard service
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: "signin", component: SigninComponent },
  { path: "todos", component: ListTodosComponent, canActivate: [RouteGuardService] },
  { path: "todos/:id", component: TodoComponent, canActivate: [RouteGuardService] },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
