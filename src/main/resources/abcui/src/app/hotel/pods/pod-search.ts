import { PodService } from './PodService';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import PodModel from './PodModel';
import { Observable } from 'rxjs';
import {switchMap, debounceTime} from 'rxjs/operators';


@Component({
  selector: 'pod-search',
  template: `
  <form class="search-form">
      <div class="row">
        <mat-form-field class="search-item" style="min-width: 282px;">
          <input type="text" placeholder="Search City" aria-label="Search City"
            matInput [formControl]="searchFormControl" name="searchText" 
             [matAutocomplete]="auto">
          <mat-autocomplete #auto="matAutocomplete">
          <mat-option *ngFor="let option of (options | async)" [value]="option">
            {{option}}
          </mat-option>
          </mat-autocomplete>
        </mat-form-field>
        
        <mat-form-field class="search-item">
          <input matInput name="startDate" [matDatepicker]="startdate" [min]="minStartDate"
           [max]="maxStartDate"  [formControl]="startDateFormControl" placeholder="Start date"
            (dateChange)="startDateChanged($event)">
          <mat-datepicker-toggle matSuffix [for]="startdate"></mat-datepicker-toggle>
          <mat-datepicker #startdate></mat-datepicker>
        </mat-form-field>

        <mat-form-field class="search-item">
          <input matInput name="endDate" [matDatepicker]="enddate"  [min]="minEndDate" [max]="maxEndDate"
          [formControl]="endDateFormControl" placeholder="End date">
          <mat-datepicker-toggle matSuffix [for]="enddate"></mat-datepicker-toggle>
          <mat-datepicker #enddate></mat-datepicker>
        </mat-form-field>

        <mat-form-field>
          <mat-label>Beds</mat-label>
          <mat-select [formControl]="bedsFormControl">
            <mat-option *ngFor="let type of roomType" [value]="type">
              {{type}}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <div style="margin-top: 35px;">
          <button mat-raised-button color="primary" (click)="search()">Search</button>
          
        </div>



      </div>
  </form>

    
  `,
  styles: [`
  .example-button-row button,
.example-button-row a {
  margin-right: 8px;
}


  .search-form {
    min-width: 150px;
    max-width: 500px;
    width: 100%;
  }

  .search-item{
    margin: 0px 15px 0px 15px;
  }
  
  .search-full-width {
    width: 100%;
  }

  .row {
    display: flex;
    flex-direction: row;
    align-content: center;
  }

@media screen and (max-width: 600px) {
  .row {
    display: block;
  }
}
    
  `]
})
export class PodSearch {

  options: Observable<[]>;

  roomType = PodModel.search.roomType;

  minStartDate = new Date();
  maxStartDate = new Date(2020, 0, 1);

  minEndDate = new Date();
  maxEndDate = new Date(2020, 0, 1);

  constructor(private podService: PodService) { }

  ngOnInit(){
    this.options = this.podService.search();
  }



  searchFormControl = new FormControl('', [
    Validators.required
  ]);

  startDateFormControl = new FormControl('', [
    Validators.required
  ]);

  endDateFormControl = new FormControl('', [
    Validators.required
  ]);

  bedsFormControl = new FormControl('', [
    Validators.required
  ]);

  startDateChanged($event){
    console.log($event.value);
    this.minEndDate = $event.value;
  }

  search() {

    let searchText = this.searchFormControl.value;
    let startDate = this.startDateFormControl.value;
    let endDate = this.endDateFormControl.value;
    let beds = this.bedsFormControl.value;

    //TODO: Convert to form group and check is valid
    if(!searchText || !startDate || !endDate || !beds)  return;

    //Removing time offset to fix timezone issue
    startDate= new Date( startDate.getTime() + Math.abs(startDate.getTimezoneOffset()*60000) );
    endDate= new Date( endDate.getTime() + Math.abs(endDate.getTimezoneOffset()*60000) );

    PodModel.search.userInput.searchText = searchText;
    PodModel.search.userInput.startDate = startDate.toISOString().substr(0,10);
    PodModel.search.userInput.endDate = endDate.toISOString().substr(0,10);
    PodModel.search.userInput.beds = beds;

    console.log(PodModel.search.userInput);
    this.podService.getHotels();
  }

}