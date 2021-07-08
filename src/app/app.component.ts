import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  questionPart1 = 'What are you';
  questionPart2 = 'here to do?';
  demoSlides = [
    { id: 1, title: 'Get a device', action: 'START HERE', link: '#', image: 'assets/images/default.png' },
    { id: 2, title: 'Add a phone-line', action: 'START HERE', link: '#', image: 'assets/images/default.png' },
    { id: 3, title: 'Upgrade', action: 'START HERE', link: '#', image: 'assets/images/default.png' },
    { id: 4, title: 'Mobile internet', action: 'START HERE', link: '#', image: 'assets/images/default.png' },
    { id: 5, title: 'Home internet', action: 'START HERE', link: '#', image: 'assets/images/default.png' }
  ];
}
