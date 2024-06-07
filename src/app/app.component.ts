import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'paidlancer';

  constructor(private iconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer) {
      this.iconRegistry.addSvgIcon("github", this.sanitizer.bypassSecurityTrustResourceUrl("/icons/github.svg"));
      this.iconRegistry.addSvgIcon("google", this.sanitizer.bypassSecurityTrustResourceUrl("/icons/google.svg"));
    }
}
