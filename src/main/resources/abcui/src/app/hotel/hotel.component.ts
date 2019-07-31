import { Component } from '@angular/core';

@Component({
  selector: 'hotel.component',
  template: `
    <pod-search (messageEvent)="receiveMessage($event)"></pod-search>
    <pod-search-results [searchdata]="message"></pod-search-results>
  `,
  styles: [`
    
  `]
})
export class HotelComponent {

  message:any;

  receiveMessage($event) {
    this.message = $event
    console.log(this.message);
  }

}
