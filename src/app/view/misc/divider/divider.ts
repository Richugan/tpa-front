import { Component, ElementRef, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  imports: [],
  templateUrl: './divider.html',
  styleUrl: './divider.scss',
})
export class Divider implements OnInit {
  @Input()
  color = '--mainColor';

  constructor(protected el: ElementRef) {}

  ngOnInit(): void {
    const dividerElement = this.el.nativeElement as HTMLElement;
    dividerElement.style.setProperty('background', this.color);
  }
}
