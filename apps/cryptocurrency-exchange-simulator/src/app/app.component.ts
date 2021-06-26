import { Component } from '@angular/core';
import { ProgressBarService } from './core/services/progress-bar.service';

@Component({
  selector: 'inzynieria-oprogramowania-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProgressBarService],
})
export class AppComponent {
  title = 'cryptocurrency-exchange-simulator';
  public readonly progressBarVisible$ = this._progressBarService.visible$;
  constructor(private readonly _progressBarService: ProgressBarService) {}
}
