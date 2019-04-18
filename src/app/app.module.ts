import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Import environment configuration
import { environment } from '../environments/environment';
// Import AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { MatToolbarModule,MatFormFieldModule,MatInputModule,MatOptionModule,MatSelectModule,MatIconModule,MatButtonModule,MatTableModule,MatCardModule,MatSnackBarModule,MatDividerModule,MatRadioModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';

import {StudentService} from './student.service';
import {SecretsService} from './secrets.service';
import { LoginComponent } from './components/login/login.component';
import { FbloginComponent } from './components/fblogin/fblogin.component';
import { UsersignupComponent } from './components/usersignup/usersignup.component';

import { GloginComponent } from './components/glogin/glogin.component';
import { GauthenticationService } from './services/gauthentication.service';


const routes: Routes = [
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'list', component: ListComponent},
  { path: 'usersignup', component: UsersignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'userlogin', component: FbloginComponent},
  { path: 'glogin', component: GloginComponent},
  { path: '', redirectTo: 'userlogin', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    LoginComponent,
    FbloginComponent,
    UsersignupComponent,
    GloginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatSnackBarModule,
    MatDividerModule,
    MatRadioModule
  ],
  providers: [StudentService,SecretsService,GauthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
