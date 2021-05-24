import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { ICarouselItem } from './Icarousel-item.metadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  /**
   * Custom Properties
   */
  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: ICarouselItem[] = [];

  /**
   * Final Properties
   */
  public finalHeight: string | number = 0;
  public currentPosition = 0;

  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
   }

  ngOnInit() {
    this.items.map( ( i, index ) => {
      i.id = index;
      i.marginLeft = 0;
    });
    setInterval(() => {
      if (this.currentPosition < this.items.length - 1) {
        this.setCurrentPosition(this.currentPosition + 1); 
      } else {
        this.setCurrentPosition(0);
      }
    }, 5000);
  }

  setCurrentPosition(position: number): TimerHandler {
    this.currentPosition = position;
    this.items.find(i => i.id === 0).marginLeft = -100 * position;
    return;
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition  - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = backPosition;
  }

  setStop(id: number) {
    this.setCurrentPosition(id);
  }
}
