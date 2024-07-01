import { AuthService } from './../../auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-board',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule],
  templateUrl: './login-board.component.html',
})

export class LoginBoardComponent {
  email: string = 'user@example.com';
  password: string = 'string';

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.router.navigate(['dashboard'])
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }
}
