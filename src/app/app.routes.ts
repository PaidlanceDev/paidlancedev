import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { FqaComponent } from './components/pages/fqa/fqa.component';
import { TermsOfServiceComponent } from './components/pages/terms-of-service/terms-of-service.component';
import { AccountTypeComponent } from './components/auth/account-type/account-type.component';
import { TalentsListComponent } from './components/pages/talents-list/talents-list.component';
import { TalentDisplayComponent } from './components/pages/talent-display/talent-display.component';
import { JobsListComponent } from './components/pages/jobs-list/jobs-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'account-type', component: AccountTypeComponent }, // TO-DO - protect this route
  { path: 'talent', component: TalentsListComponent },
  { path: 'talent/:talentUsername', component: TalentDisplayComponent},
  { path: 'jobs', component: JobsListComponent },
  { path: 'fqa', component: FqaComponent },
  { path: 'tos', component: TermsOfServiceComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];
