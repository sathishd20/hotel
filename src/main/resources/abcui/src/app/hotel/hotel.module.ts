import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material/material.module';

import { HotelComponent } from './hotel.component';
import { HotelRoutingModule } from './hotel-routing.module';

import { PodSearch } from './pods/pod-search';
import { PodSearchResults } from './pods/pod-search-results';
import { PodService } from './pods/PodService';


@NgModule({
  declarations: [
    HotelComponent,
    PodSearch,
    PodSearchResults
  ],
  imports: [
    HotelRoutingModule,  
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CommonModule
  ],
  providers: [
    PodService
  ]
})
export class HotelModule { }
