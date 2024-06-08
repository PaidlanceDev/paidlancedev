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
      url: 'https://github.com/PaidlancerDev',
      icon: 'github'
    },
    {
      url: 'https://www.linkedin.com/company/paidlancerdev',
      icon: 'linkedin'
    },
    {
      url: 'https://twitter.com/PaidlancerDev',
      icon: 'twitter'
    },
    {
      url: 'https://www.youtube.com/@PaidlancerDev',
      icon: 'youtube'
    }
  ];
}
