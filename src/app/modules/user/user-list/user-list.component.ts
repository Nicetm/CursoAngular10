import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import {USERS_DATA} from '@data/constants/users.const';
import { UserService } from '@data/services/api/user.service';
import { ICarouselItem } from '@shared/components/carousel/Icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from '@data/constants/carousel.const';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit, OnInit, OnDestroy, OnChanges {

  public carouselData: ICarouselItem[];
  public users: ICardUser[];
  public title: string;
  public userSuscription: Subscription;
  public pricePesos: number;
  public obj: Array<any>;
  public dateVar: number;
  public currencyVar: number;
  public decimalVar: number;
  public user: {
    name: string;
    role: string;
    gender: 'M' | 'F';
  };

  constructor(
    private userService: UserService
  ) {
    this.carouselData = CAROUSEL_DATA_ITEMS;
    this.title = 'Listado de Usuarios';
    this.pricePesos = 0;
    this.obj = [{id: 1, name: 'primero', joinDate: 1599935113003}, {id: 2, name: 'segundo', joinDate: 1599935113003}];
    this.dateVar = (new Date()).getTime();
    this.currencyVar = 1580000;
    this.decimalVar = 3.33246354;
    this.user = {
      name: 'Pablo',
      role: 'Administrador',
      gender: 'M'
    }
  }
  
  ngOnInit() {
    this.getUsers();
    console.log('User List - onInit')
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngAfterViewInit(): void {
    console.log('User List - afterViewInit')
  }

  addAmount() {
    this.pricePesos += 10;
    // this.obj.push({
    //   id: this.obj.length + 1,
    //   name: 'segundo',
    //   joiDate: 1599935113003
    // })
  }

  getUsers() {
    this.userService
      .getAllUsers()
      .subscribe( r => this.users = (r.error) ? []: r.data );
  }

  ngOnDestroy() {
    if (this.userSuscription) {
      this.userSuscription.unsubscribe();
    }
  }
}
