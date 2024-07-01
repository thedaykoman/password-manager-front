import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }
} 
