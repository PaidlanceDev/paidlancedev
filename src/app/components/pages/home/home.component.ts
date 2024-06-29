import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { TestService } from '../../../services/test.service';
import { User } from '@supabase/supabase-js';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  user: User | null = null;
  private authService = inject(AuthService);
  testService = inject(TestService);

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user) => {
      if (user) {
        this.user = user;
        console.log("User:", this.user);
      } else {
        this.user = null;
      }
    });
    this.testService.getAllTestData();
  }
}
