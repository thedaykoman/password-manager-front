import { AuthService } from './../../auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  email:string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  
  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        // Redirecionar após o login bem-sucedido
        this.router.navigate(['/dashboard']); 
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }
}
