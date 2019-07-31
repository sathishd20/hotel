import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import PodModel from './PodModel';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class PodService{

    constructor(private http: HttpClient) { }

    search(): Observable<[]> {
      return this.http.get<[]>('/city')
      .pipe(
        tap((response: []) => {
          return response;
        })
        );
    }

    getHotels(): Observable<[]> {
      return this.http.get<[]>('/hotels/all')
      .pipe(
        tap((response: []) => {
          console.log(response);
          return response;
        })
        );
    }

    searchHotels(params): Observable<[]> {
      return this.http.get<[]>('/hotels',{params:params})
      .pipe(
        tap((response: []) => {
          console.log(response);
          return response;
        })
        );
    }

    getCities(){
        let url='/city';
        let headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
 
        this.http.get<[]>(url,{headers : headers}).subscribe(
            data => {
                PodModel.search.suggestions = data;
                console.log(PodModel.search.suggestions);
              },
              (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                  console.log("Client-side error occured.");
                } else {
                  console.log("Server-side error occured.");
                }
              }
        );
    }

    parseGetCities(data){

    }

}


