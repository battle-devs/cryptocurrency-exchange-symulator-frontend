import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'inzynieria-oprogramowania-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  public isMenuOpen = false;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
  }

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }

  public switchLang(lang: string) {
    this.translate.use(lang);
  }
}
