import { Component, OnInit, inject } from '@angular/core';
import { TalentService } from '../../services/talent.service';
import { Talent } from '../../models/talent';
import { RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-talents-list',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './talents-list.component.html',
  styleUrl: './talents-list.component.scss'
})
export class TalentsListComponent {
  talents: Talent[] = [];
  private talentService: TalentService = inject(TalentService);

  ngOnInit(): void {
    this.talentService.getAllTalents().subscribe((data) => {
      this.talents = data;
    });
  }
}
