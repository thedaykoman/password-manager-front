import { AuthService } from './../../auth/auth.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-board',
  standalone: true,
  imports: [RouterLink, FormsModule, RouterLink],
  templateUrl: './register-board.component.html',
})

export class RegisterBoardComponent {
  username: string = 'string';
  email: string = 'user@example.com';
  password: string = 'string';

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onRegister(): void {
    this.authService.register(this.username, this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['dashboard'])
      },
      error: (err) => {
        console.error("Register failed", err)
      }
    })
  }
}
