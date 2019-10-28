import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TopMenu } from './scrollable-tabs/scrollable-tabs.component';
import { Slide, SlideshowComponent } from './slideshow/slideshow.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(SlideshowComponent, { static: true })
  slideshowComponent: SlideshowComponent;

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
  slides: Slide[] = [
    {
      imgUrl:
        'https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3bf33a87e950352ac17159075c43fbf2b2118ba8.jpg',
      caption: 'xxx',
      link: 'https://www.baidu.com',
    },
    {
      imgUrl:
        'https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/42166d224f4a20a4a51c41c89f529822720ed0bb.jpg',
      caption: 'xxx',
      link: 'https://www.baidu.com',
    },
    {
      imgUrl:
        'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b17eca8065380cd780b4dee2ae44ad3459828112.jpg',
      caption: 'xxx',
      link: 'https://www.baidu.com',
    },
    {
      imgUrl:
        'https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/2cf5e0fe9925bc31698b629751df8db1ca1370ee.jpg',
      caption: 'xxx',
      link: 'https://www.baidu.com',
    },
  ];
  handleTabSelected(e: TopMenu) {
    console.log(e);
  }
  ngAfterViewInit(): void {
    // console.log(this.slideshowComponent);
  }
}
