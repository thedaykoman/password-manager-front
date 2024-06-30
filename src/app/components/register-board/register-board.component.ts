import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-board',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register-board.component.html',
})

export class RegisterBoardComponent {
  name: string = '';
  email: string = '';
  password: string = '';
}
