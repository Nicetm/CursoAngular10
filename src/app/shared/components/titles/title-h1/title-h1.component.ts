import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.scss']
})
export class TitleH1Component implements DoCheck {
 
  @Input() pricePesos: number;
  public priceDollar: number;
  public priceEuro: number;

  @Input() text: string;
  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark';
  @Input() data: Array<any> = [];

  constructor() { 
    this.text = '';
    this.type = 'primary';
    this.pricePesos = 0;
    this.priceDollar = 0;
    this.priceEuro = 0;
  }

  ngDoCheck() {
    this.priceDollar = this.pricePesos / this.getCurrentDollarFromApi();
    this.priceEuro = this.pricePesos / this.getCurrentEuroFromApi();
    // this.data.map(i => {
    //   i.isActive = true;
    // })
    // console.log(this.data)
  }

  // ngOnChanges(c: SimpleChanges): void {
  //   if (c.pricePesos && c.pricePesos.currentValue) {
  //     this.pricePesos = c.pricePesos.currentValue;
  //     this.priceDollar = this.pricePesos / this.getCurrentDollarFromApi();
  //     this.priceEuro = this.pricePesos / this.getCurrentEuroFromApi();
  //   }
    
  //   if (c.data && c.data.currentValue) {
  //     console.log('data changed')
  //   }
  // }

  // ngOnInit() {
  // }

  getCurrentDollarFromApi() {
    return 693.74;
  }

  getCurrentEuroFromApi() {
    return 842.63;
  }
}
