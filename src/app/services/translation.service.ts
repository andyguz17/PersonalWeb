import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE_KEY } from '../global/local-storage';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  language = this.localService.getItem(LANGUAGE_KEY);

  constructor(
    private translate: TranslateService,
    private localService: LocalStorageService
  ) {}

  useLanguage(lang: string) {
    this.localService.setItem(LANGUAGE_KEY, lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
