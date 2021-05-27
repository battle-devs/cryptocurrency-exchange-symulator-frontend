import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inzynieria-oprogramowania-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public banner = 'assets/'

  constructor() { }

  ngOnInit(): void {
  }

}
