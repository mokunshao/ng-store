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
  @Input() intervalBySeconds = 2;
  constructor(private rd2: Renderer2) {}

  ngOnInit() {}
  ngAfterViewInit() {
    let i = 0;
    setInterval(() => {
      this.rd2.setProperty(
        this.slideshow.nativeElement,
        'scrollLeft',
        ((++i % this.slideImgs.length) *
          this.slideshow.nativeElement.scrollWidth) /
          this.slideImgs.length,
      );
    }, this.intervalBySeconds * 1000);
  }
}
