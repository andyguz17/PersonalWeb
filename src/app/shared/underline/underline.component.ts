import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-underline',
  templateUrl: './underline.component.html',
  styleUrls: ['./underline.component.scss'],
})
export class UnderlineComponent implements OnInit {
  @Input() fontSize = '18px';
  @Input() padding = '5px';
  @Input() text: string;
  @Input() width: string;

  constructor() {}

  ngOnInit(): void {}

  styleText(): Object {
    return {
      fontSize: this.fontSize,
      padding: this.padding,
      width: this.width,
    };
  }
}
