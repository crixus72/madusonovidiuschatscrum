import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {ScrumboardComponent} from "./scrumboard/scrumboard.component";
import {AuthGuard} from './auth.guard';
import {CreateprojectComponent} from "./createproject/createproject.component";
import {ChangeroleComponent} from "./changerole/changerole.component";
import {ChatComponent} from "./chat/chat.component";


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'scrumboard/:project_id', component: ScrumboardComponent, canActivate: [AuthGuard]},
  {path: 'scrumboard', component: ScrumboardComponent, canActivate: [AuthGuard]},
  {path: 'createproject/', component: CreateprojectComponent, canActivate: [AuthGuard]},
  {path: 'changerole/:role_id', component: ChangeroleComponent, canActivate: [AuthGuard]},
  {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
