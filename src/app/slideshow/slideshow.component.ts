import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  images = ['analytics.png', 'connection.png', 'hero.png'];

  headlines = [
    "Hi, I'm Norman Rahmel Software Engineer.",
    'Dear visitor, I am a software engineer and university student in Business and Computer Science',
    'Born to Code',
  ];

  currentImage = 0;

  showImage = true;

  ngOnInit() {
    this.upDateImage();
  }

  upDateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 1);
    }, 8000);
  }
}
