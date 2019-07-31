import { PodService } from './PodService';
import { Component, Input } from '@angular/core';
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

  private _searchdata: any;

  @Input() set searchdata(value: any) {
    if(!value)  return;
    this._searchdata = value;
    console.log('got it',value);
    this.hotels = this.podService.searchHotels(this.searchdata);
  }

  get searchdata(): any {
      return this._searchdata;
  }

  hotels: Observable<[]>;

  constructor(private podService: PodService) { }

  ngOnInit(){
    
  }

}