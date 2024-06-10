import { Component, inject, Input, OnDestroy } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatToolbarModule } from "@angular/material/toolbar";
import {MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from "../../../services/auth.service";
import { User } from "@supabase/supabase-js";
import { filter, map, Subscription } from "rxjs";


@Component({
	selector: "app-header",
	standalone: true,
	imports: [
		FormsModule,
		ReactiveFormsModule,
		RouterLink,
		MatToolbarModule,
		MatFormFieldModule,
    MatMenuModule,
		MatInputModule,
		MatButtonModule,
    MatIconModule,
	],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnDestroy {
  @Input() sidenavRef: any;


	selectedItem: any;
  showMenu = false;
  user: User | null = null;
  private routeSubscription!: Subscription;
  private router =  inject(Router)
  private activatedRoute = inject(ActivatedRoute)
  private authService = inject(AuthService);

  constructor() {
    this.authService.currentUser.subscribe((user) => {
      if (user) {
        this.user = user;
        console.log("User:", this.user);
      } else {
        this.user = null;
      }
    });
  }

  checkRoute() {
    this.routeSubscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute)
      )
      .subscribe(activatedRoute => {
        const currentRoute = activatedRoute.firstChild;
        if (currentRoute) {
          const routePath = currentRoute.snapshot.routeConfig?.path;
          if (routePath === '') {
            this.showMenu = false;
          } else if (routePath?.startsWith('client') || routePath?.startsWith('talent')) {
            this.showMenu = true;
          }
        }
      });
  }

  onLogout() {
    this.authService.signOut();
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
