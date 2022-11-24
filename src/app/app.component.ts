import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StarWarsDocs';
  isMobile! : boolean;
  resizeObservable$!: Observable<Event>;
  resizeSubscription$!: Subscription;

  
  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      const screenRes = screen.width;
      if(screenRes <= 600){
        this.isMobile = true;
      }else {
        this.isMobile = false;
      }
    })
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
}
}
