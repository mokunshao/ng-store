import { Component } from '@angular/core';
import { TopMenu } from './scrollable-tabs/scrollable-tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  topMenu: TopMenu[] = [
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
  handleTabSelected(e: TopMenu) {
    console.log(e);
  }
}
