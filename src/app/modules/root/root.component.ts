import { Component, OnInit } from '@angular/core';

// para usar as tabs, eu segui esse tutorial:
// https://zoaibkhan.com/blog/angular-material-tabs-with-lazy-loaded-routes/

export interface TabItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})

export class RootComponent implements OnInit {
  tabs: TabItem[];
  constructor(

  ) {
    this.tabs = [
      {
        label: 'HOME',
        route: '/home'
      },
      {
        label: 'FAQ',
        route: '/faq'
      },
      {
        label: 'LOCAIS',
        route: '/locais'
      },
      {
        label: 'CATEGORIAS',
        route: '/categorias'
      }
    ];
   }

  ngOnInit(): void {

  }
}
