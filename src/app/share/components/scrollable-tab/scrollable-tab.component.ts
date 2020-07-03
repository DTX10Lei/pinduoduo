import { Component, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

export interface TopMenu {
  title: string;
  link?: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})

export class ScrollableTabComponent{
  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backGroundColor = '#ccc';
  @Input() titleActiveColor = 'brown';
  @Input() titleColor = 'blue';
  @Input() indicatorColor= 'yellow';

  @Output() tabSelected = new EventEmitter();

  constructor() {
    console.log('scrollable-tab component constructor !');
  }



   handleSelection(index: number){
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }
}
