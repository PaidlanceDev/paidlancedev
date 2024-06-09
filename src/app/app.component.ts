import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'paidlancer';

  constructor(private iconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer) {
      this.iconRegistry.addSvgIcon("github", this.sanitizer.bypassSecurityTrustResourceUrl("/icons/github.svg"));
      this.iconRegistry.addSvgIcon("google", this.sanitizer.bypassSecurityTrustResourceUrl("/icons/google.svg"));
      this.iconRegistry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('icons/linkedin.svg'));
      this.iconRegistry.addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/twitter.svg'));
      this.iconRegistry.addSvgIcon('youtube', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/youtube.svg'));
    }
}



