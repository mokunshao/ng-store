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
  OnDestroy,
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
export class SlideshowComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('slideshow', { static: true }) slideshow: ElementRef;
  @ViewChildren('slideImgs') slideImgs: QueryList<ElementRef>;
  @Input() slideShowHeight = '300px';
  @Input() slides: Slide[] = [];
  @Input() intervalBySeconds = 4;
  selectedIndex = 0;
  timer;
  constructor(private rd2: Renderer2) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.timer = setInterval(() => {
      this.rd2.setProperty(
        this.slideshow.nativeElement,
        'scrollLeft',
        ((++this.selectedIndex % this.slides.length) *
          this.slideshow.nativeElement.scrollWidth) /
          this.slides.length,
      );
    }, this.intervalBySeconds * 1000);
  }
  handleScroll(e) {
    const ratio =
      (e.target.scrollLeft * this.slides.length) / e.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }
  ngOnDestroy(): void {
    clearInterval(this.timer);
    this.timer = null;
  }
}
