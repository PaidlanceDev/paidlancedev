import { Component } from '@angular/core';

@Component({
  selector: 'app-after-signin',
  standalone: true,
  imports: [],
  templateUrl: './after-signin.component.html',
  styleUrl: './after-signin.component.scss'
})
export class AfterSigninComponent {
  // TO-DO - if account has role go to profile page
  // TO-DO - if account has no role go to account-type page
}
