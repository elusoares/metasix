import { Component, OnInit } from '@angular/core';

export interface TabItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tabs: TabItem[];
  constructor() {
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
