import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface TopMenu {
  title: string;
  readonly link?: string;
}

@Component({
  selector: 'app-scrollable-tabs',
  templateUrl: './scrollable-tabs.component.html',
  styleUrls: ['./scrollable-tabs.component.scss'],
})
export class ScrollableTabsComponent implements OnInit {
  selectedIndex = -1;
  title = 'ng-store';
  @Input() menu: TopMenu[] = [];
  @Output() tabSelected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menu[this.selectedIndex]);
  }
}
