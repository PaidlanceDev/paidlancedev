import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialComponent } from '../../partials/social/social.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, SocialComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();
}
