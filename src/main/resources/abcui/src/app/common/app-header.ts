import { Component } from '@angular/core';
import { AppModel } from './AppModel';


@Component({
  selector: 'app-header',
  template: `
  <div style="height: 90vh;"> 
    <mat-toolbar color="primary">
        <div fxShow="true" fxHide.gt-sm="true">
        <button mat-icon-button (click)="sidenav.toggle()">
            <mat-icon>menu</mat-icon>
        </button>
        </div>
        <a mat-button class="companyName" routerLink="/">
        <span>{{data.title}}</span>
        </a>
        <span class="example-spacer"></span>
        <div fxShow="true" fxHide.lt-md="true">

        <a mat-button *ngFor="let data of data.links" [routerLink]="data.link">{{data.name}}</a> 
        </div>
    </mat-toolbar>
    <mat-sidenav-container fxFlexFill class="example-container">
        <mat-sidenav color="primary" #sidenav fxLayout="column" mode="over" opened="false" fxHide.gt-sm="true">
        <div fxLayout="column">
            <a mat-button *ngFor="let data of data.links" [routerLink]="data.link">{{data.name}}</a> 
        </div>
        </mat-sidenav>
        <mat-sidenav-content fxFlexFill>
        <ng-content></ng-content>
        </mat-sidenav-content>
    </mat-sidenav-container>
    </div>
  `,
  styles: [`
    .example-fill-remaining-space {
      /* This fills the remaining space, by using flexbox. 
        Every toolbar row uses a flexbox row layout. */
      flex: 1 1 auto;
    } 
    .companyName{
        font-size: 140%;
    }
    div {
        overflow: inherit;
    }
    a{
        text-decoration: none;
        font-size: 110%;
        white-space: normal;
    }
    button{
        font-size: 110%;
        min-width: min-content;
    }
    .example-icon {
        padding: 0 14px;
      }
    
      .example-spacer {
        flex: 1 1 auto;
      }
      .mat-sidenav-content{
          font-size: 200%;
          text-align: center;
      } 
  `]
})
export class AppHeader {

    public data = AppModel.appHeader;
  
}