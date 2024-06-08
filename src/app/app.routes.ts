import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';
import { FqaComponent } from './components/fqa/fqa.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'join', component: JoinComponent },
  { path: 'fqa', component: FqaComponent },
  { path: 'tos', component: TermsOfServiceComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];
