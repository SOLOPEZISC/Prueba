import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/registry/login/login.component'
import { UserRegComponent } from './components/registry/user-reg/user-reg.component'
import { PermitsComponent } from './components/system/permits/permits.component'


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: "reg", component: UserRegComponent },
  { path: "insper", component: PermitsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
