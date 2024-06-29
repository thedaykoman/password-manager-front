import { Component } from '@angular/core';
import { LoginBoardComponent } from '../../components/login-board/login-board.component';

@Component({
  selector: 'app-home-login',
  standalone: true,
  imports: [LoginBoardComponent],
  templateUrl: './home-login.component.html',
})
export class HomeLoginComponent {

}
