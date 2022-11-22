import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarMobileComponent implements OnInit, AfterViewInit {
  private list2!: any;
  constructor() {
  }
  ngOnInit(): void {
  }
  
  
  
  ngAfterViewInit(): void {
    const list = document.querySelectorAll('.list');
    this.list2 = list;
  }

  activeLink(item: any): void{
    // console.log(this.list2);
    for (let i = 0; i < this.list2.length; i++) {
      const element = this.list2[i];
      if(element.classList.contains('active')){
        element.classList.remove('active');
        console.log(element);
      }
    }
    console.log(item);
    item.classList.add('active');
  }
}
