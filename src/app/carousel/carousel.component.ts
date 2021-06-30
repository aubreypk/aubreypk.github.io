import { Component, OnInit } from '@angular/core';

// Glide
import Glide from '@glidejs/glide';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  // tslint:disable-next-line:typedef
  ngAfterViewInit(): void {
    // tslint:disable-next-line:prefer-const
    let glideMulti1 = new Glide('.multi1', {
      type: 'carousel',
      focusAt: 'center',
      keyboard: true,
      gap: 15,
      perView: 5,
      breakpoints: {
        1366: {
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
