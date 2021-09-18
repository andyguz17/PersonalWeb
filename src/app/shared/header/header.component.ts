import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  clicked = 0;
  currentRoute: string;

  translation$ = this.translate.get('app.navbar');
  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((url) => url instanceof NavigationEnd))
      .subscribe(({ url }: NavigationEnd) => this.setClick(url));
  }

  setClick(path: string) {
    switch (path) {
      case '/blog':
        this.clicked = 1;
        break;
      case '/courses':
        this.clicked = 2;
        break;
      case '/work':
        this.clicked = 3;
        break;
      case '/contact':
        this.clicked = 4;
        break;
      case '/login':
        this.clicked = 5;
        break;
      default:
        this.clicked = 0;
        break;
    }
  }
}
