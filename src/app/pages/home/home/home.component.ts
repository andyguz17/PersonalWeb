import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  translate$ = this.translate.get('app.home');

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}
}
