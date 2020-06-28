import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

export interface TopMenu {
  title: String;
  link?: String;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})

export class ScrollableTabComponent implements OnInit {
  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backGroundColor = '#fff';
  @Input() titleActiveColor = 'brown';
  @Input() titleColor = 'blue'; 
  @Input() indicatorColor= 'yellow';

  @Output() tabSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }  
  
  handleSelection(index:number){
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }
}
