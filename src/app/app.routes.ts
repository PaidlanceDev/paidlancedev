import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FqaComponent } from './components/fqa/fqa.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { TalentsListComponent } from './components/talents-list/talents-list.component';
import { TalentDisplayComponent } from './components/talent-display/talent-display.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'account-type', component: AccountTypeComponent }, // TO-DO - protect this route
  { path: 'talents', component: TalentsListComponent },
  { path: 'talent/:talentUsername', component: TalentDisplayComponent},
  { path: 'fqa', component: FqaComponent },
  { path: 'tos', component: TermsOfServiceComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];
