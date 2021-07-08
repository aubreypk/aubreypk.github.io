import { Component, Input, OnInit } from '@angular/core';

// Glide
import Glide from '@glidejs/glide';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() slides: [];
  @Input() question1: string;
  @Input() question2: string;

  constructor() { }

  ngOnInit(): void { }

  // tslint:disable-next-line:typedef
  ngAfterViewInit(): void {
    // tslint:disable-next-line:prefer-const
    let glideMulti1 = new Glide('.multi1', {
      type: 'carousel',
      focusAt: 'center',
      keyboard: true,
      perView: 5,
      startAt: 2,
      breakpoints: {
        1416: {
          perView: 5
        },
        1080: {
          perView: 3
        },
        600: {
          perView: 1
        }
      }
    });

    glideMulti1.mount();

  }

}
