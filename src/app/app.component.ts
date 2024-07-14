import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';
import { User } from '@supabase/supabase-js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'paidlancedev';
  user: User | null = null;
  authService = inject(AuthService);

  constructor(private iconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer) {
      this.iconRegistry.addSvgIcon("github", this.sanitizer.bypassSecurityTrustResourceUrl("icons/github.svg"));
      this.iconRegistry.addSvgIcon("google", this.sanitizer.bypassSecurityTrustResourceUrl("icons/google.svg"));
      this.iconRegistry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('icons/linkedin.svg'));
      this.iconRegistry.addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('icons/twitter.svg'));
      this.iconRegistry.addSvgIcon('youtube', this.sanitizer.bypassSecurityTrustResourceUrl('icons/youtube.svg'));
    }

  ngOnInit() {
    this.authService.currentUser.subscribe((user) => {
      if (user) {
        this.user = user;
        // TO-DO - after creating the table check if user has a role and if not redirect to choose one
        // else to matching route
      } else {
        this.user = null;
      }
    });
  }
}



