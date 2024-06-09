import { Component, OnInit, inject } from "@angular/core";
import { TalentService } from "../../../services/talent.service";
import { Talent } from "../../../models/talent";
import { RouterLink } from "@angular/router";

import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import {MatChipsModule} from '@angular/material/chips';

@Component({
	selector: "app-talents-list",
	standalone: true,
	imports: [RouterLink, MatCardModule, MatExpansionModule, MatButtonModule, MatChipsModule],
	templateUrl: "./talents-list.component.html",
	styleUrl: "./talents-list.component.scss",
})
export class TalentsListComponent {
  panelOpenState = true;
	talents: Talent[] = [];
  fields: any[] = [];

  hourlyRate = ["$25 or less", "$25 to $50", "$50 to $100", "$100 and above"];
  yearsExperience = ["1 year or less", "1 to 3 years", "3 to 5 years", "5 years and above"];
	private talentService: TalentService = inject(TalentService);

	ngOnInit(): void {
		this.talentService.getAllTalents().subscribe((data) => {
			this.talents = data;
      this.fields = this.talents.map((talent) => talent.field);
		});
	}
}
