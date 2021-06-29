import { Component } from '@angular/core';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'almentorFrontEndTask';
  textDir: string = 'ltr';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    // Set default language as browser language if found as english or arabic. and set defualt to english otherwise
    translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');

    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
    {
      if(event.lang == 'ar')
      {
        this.textDir = 'rtl';
      } 
      else
      {
        this.textDir = 'ltr';
      }
    });
  }

  
}
