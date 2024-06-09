import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatToolbarModule } from "@angular/material/toolbar";
import {MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';


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
export class HeaderComponent {
	selectedItem: any;
  private router = inject(Router);

  handleClick($event: any) {
    $event.stopPropagation();
  }

  select(item: any) {
    this.selectedItem = item;
    this.router.navigate([ this.selectedItem.toLowerCase()]);
  }
}
