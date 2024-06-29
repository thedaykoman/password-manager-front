import { Component } from '@angular/core';
import { RegisterBoardComponent } from '../../components/register-board/register-board.component';

@Component({
  selector: 'app-home-register',
  standalone: true,
  imports: [RegisterBoardComponent],
  templateUrl: './home-register.component.html',
})
export class HomeRegisterComponent {

}
