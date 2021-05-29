import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '@data/services/api/auth.service';
import { faBars, faBell, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() showMenu;
  public faBars;
  public faBell;
  public faComment;
  public avatar;
  public logo;

  constructor(public authService: AuthService) {
    this.showMenu = new EventEmitter<any>();
    this.faBars = faBars;
    this.faBell = faBell;
    this.faComment = faComment;
    this.logo = 'assets/images/defaults/logo.png';
   }
}
