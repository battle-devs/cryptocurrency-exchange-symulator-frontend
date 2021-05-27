import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inzynieria-oprogramowania-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public banner = 'assets/'

  constructor() { }

  ngOnInit(): void {
  }

}
