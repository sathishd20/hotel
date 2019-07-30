import { PodService } from './PodService';
import { Component } from '@angular/core';
import PodModel from './PodModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'pod-search-results',
  template: `
  <div>
    <mat-card class="card-picture" *ngFor="let hotel of (hotels | async) ">
        <mat-card-title>{{hotel.name}}</mat-card-title>
        <mat-card-subtitle>{{hotel.city}}</mat-card-subtitle>
        <img mat-card-image src="assets/room.png">
        <mat-card-content>
        <p>
          {{hotel.details}}
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button  color="primary">BOOK</button>
        <button mat-raised-button color="primary">CONTACT</button>
      </mat-card-actions>
    </mat-card>
   </div>
   `,
  styles: [`
  .mat-card{
    padding: 8px;
  }
  .mat-card>.mat-card-actions {
    margin-bottom: 8px;
  }
  .img {
    width: 100%;
    margin-bottom: 18%;
  }
  .card-picture {
    width: 100%;
    margin-bottom: 2%;
  }
  .container {
    min-height: 100%;
    width: 100%;
  }
  .search-form {
    width: 90%;
  }
  .mat-card-image {
    width: calc(100% + 32px);
    margin: 0 -16px 16px -16px;
    height: 120px;
  }
    
  `]
})
export class PodSearchResults {

  hotels: Observable<[]>;

  constructor(private podService: PodService) { }

  ngOnInit(){
    this.hotels = this.podService.getHotels();
  }

    hotels1 = [
        {
          id: 1,
          name: 'A natural view',
          city: 'city',
          details: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
          img: 'assets/room.png'
        },
        {
          id: 2,
          title: 'Newspaper',
          img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
        },
        {
          id: 3,
          title: 'Favourite pizza',
          img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
        },
        {
          id: 4,
          title: 'Abstract design',
          img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'
        },
        {
          id: 5,
          title: 'Tech',
          img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg'
        },
        {
          id: 6,
          title: 'Nightlife',
          img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
        },
      ];

}