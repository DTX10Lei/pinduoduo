import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss']
})
export class HorizontalGridComponent implements OnInit {
  private _username = '';

  @Output() usernameChange = new EventEmitter();

  @Input()
  public get username(): string {
    return this._username;
  }

  public set username( val: string) {
     this._username = val;
     this.usernameChange.emit(val);
  }
  constructor() { }

  ngOnInit() {
  }

}
