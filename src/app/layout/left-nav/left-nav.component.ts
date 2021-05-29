import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LEFT_NAV_MENUS } from '@data/constants/left-nav-menu.const';
import { ILeftNavMenu } from '@data/interfaces';
import { AuthService } from '@data/services/api/auth.service';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  
  @Output() showMenu: any;
  public faBars: any;
  public logo: string;
  public menus: ILeftNavMenu[];
  public logoutMenu: ILeftNavMenu;
  
  constructor( public authService: AuthService) { 

    this.showMenu = new EventEmitter<any>();
    this.faBars = faBars;
    this.logo = "assets/images/defaults/logo.png";
    this.menus = LEFT_NAV_MENUS;
  }

  ngOnInit() {
    this.logoutMenu = {
      title: '',
      links: [
        {
          icon: faSignOutAlt,
          name: 'Cerrar Sesión',
          method: () => this.authService.logout()
        }
      ]

    }
  }
}
