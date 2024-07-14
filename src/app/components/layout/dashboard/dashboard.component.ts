import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, inject, OnDestroy } from "@angular/core";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink, RouterOutlet } from "@angular/router";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatMenuModule} from '@angular/material/menu';
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { User } from "@supabase/supabase-js";
import { AuthService } from "../../../services/auth.service";
import { HeaderComponent } from "../header/header.component";


@Component({
	selector: "app-dashboard",
	standalone: true,
	imports: [
    RouterLink,
    RouterOutlet,
    HeaderComponent,
		FooterComponent,
		MatToolbarModule,
    MatMenuModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
	],
	templateUrl: "./dashboard.component.html",
	styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent implements OnDestroy {
	mobileQuery: MediaQueryList;
  user: User | null = null;
  userRole: string | null = null;
  private authService = inject(AuthService);

	navItems = [
    { name: "Projects", route: "projects" },
    { name: "New Project", route: "new" },
    { name: "Matches", route: "matches" },
    { name: "All Talent", route: "/all-talent" },
    { name: "All Projects", route: "/all-projects" },
    { name: "Settings", route: "settings" },
  ];

	private _mobileQueryListener: () => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.authService.currentUser.subscribe((user) => {
      if (user) {
        this.user = user;
        console.log("User:", this.user);
      } else {
        this.user = null;
      }
    });
		this.mobileQuery = media.matchMedia("(max-width: 600px)");
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

  onLogout() {
    this.authService.signOut();
  }

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
}
