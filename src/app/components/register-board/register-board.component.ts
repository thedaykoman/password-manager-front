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
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onRegister(): void {
    alert(this.name + this.email + this.password);
  }
}
