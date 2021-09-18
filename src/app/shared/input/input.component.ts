import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() control: FormControl;
  @Input() type: string;
  @Input() width: string;
  @Input() placeholder: string;

  @Input() padding = '10px';
  @Input() fontSize = '16px';

  styleInput(): Object {
    return {
      fontSize: this.fontSize,
      padding: this.padding,
      width: this.width,
    };
  }
}
