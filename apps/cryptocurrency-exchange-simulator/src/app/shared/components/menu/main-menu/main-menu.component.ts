import { Component } from '@angular/core';

@Component({
  selector: 'inzynieria-oprogramowania-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  public isMenuOpen = false;

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
}
