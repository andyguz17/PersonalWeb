import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);

  error$ = this.translate.get('app.login.errors');
  input$ = this.translate.get('app.login.inputs');
  oauth$ = this.translate.get('app.login.oauth');
  
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.login = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  submit() {
    if (this.login.valid) {
      console.log(this.login.value);
    }
  }
}
