import { Component, OnInit } from '@angular/core';

interface TopMenu {
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
  menu: TopMenu[] = [
    { title: '热门', link: '#' },
    { title: '男装', link: '#' },
    { title: '女装', link: '#' },
    { title: '图书', link: '#' },
    { title: '运动', link: '#' },
    { title: '手机', link: '#' },
    { title: '电脑', link: '#' },
    { title: '美妆', link: '#' },
    { title: '汽车', link: '#' },
    { title: '医药', link: '#' },
    { title: '内衣', link: '#' },
  ];

  constructor() {}

  ngOnInit() {}
}
