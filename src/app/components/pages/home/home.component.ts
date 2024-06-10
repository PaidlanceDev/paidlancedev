import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { TestService } from '../../../services/test.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  testService = inject(TestService);

  ngOnInit(): void {
    this.testService.getAllTestData();
  }
}
