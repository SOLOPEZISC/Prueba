import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/registry/login/login.component';
import { UserRegComponent } from './components/registry/user-reg/user-reg.component';
import { SystemComponent } from './components/system/system.component';
import { PermitsComponent } from './components/system/permits/permits.component';
import { ProfilesComponent } from './components/system/profiles/profiles.component';
import { UsersComponent } from './components/system/users/users.component';
import {UsersService} from './service/users.service';
import {ProfilesService} from './service/profiles.service';
import {PermitsService} from './service/permits.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegComponent,
    SystemComponent,
    PermitsComponent,
    ProfilesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UsersService,
    ProfilesService,
    PermitsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
