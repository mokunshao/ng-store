import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Renderer2,
} from '@angular/core';

export interface Slide {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @ViewChild('slideshow', { static: true }) slideshow: ElementRef;
  @ViewChildren('slideImgs') slideImgs: QueryList<ElementRef>;
  @Input() slideShowHeight = '300px';
  @Input() slides: Slide[] = [];
  constructor(private rd2: Renderer2) {}

  ngOnInit() {
    // console.log(this.slideshow);
  }
  ngAfterViewInit() {
    // console.log(this.slideImgs);
    // this.slideImgs.forEach((item) => {
    //   this.rd2.setStyle(item.nativeElement, 'height', '300px');
    // });
  }
}
