import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:'list',component:ListComponent},
{path:'',component:LoginComponent},
{path:'userdetails/:id',component:UserDetailsComponent}
// {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ListComponent,UserDetailsComponent,LoginComponent]