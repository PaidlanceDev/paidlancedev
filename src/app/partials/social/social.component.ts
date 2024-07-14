import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-social',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {
  socialLinks = [
    {
      url: 'https://github.com/PaidlanceDev',
      icon: 'github'
    },
    {
      url: 'https://www.linkedin.com/company/paidlancedev',
      icon: 'linkedin'
    },
    {
      url: 'https://twitter.com/PaidlanceDev',
      icon: 'twitter'
    },
    {
      url: 'https://www.youtube.com/@PaidlanceDev',
      icon: 'youtube'
    }
  ];
}
