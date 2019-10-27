import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

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
export class SlideshowComponent implements OnInit {
  @ViewChild('slideshow', { static: true }) slideshow: ElementRef;
  @Input() slides: Slide[] = [];
  constructor() {}

  ngOnInit() {
    console.log(this.slideshow);
  }
}
