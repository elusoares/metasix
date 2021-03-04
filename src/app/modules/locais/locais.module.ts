import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocaisRoutingModule } from './locais-routing.module';
import { LocaisComponent } from './locais.component';


@NgModule({
  declarations: [LocaisComponent],
  imports: [
    CommonModule,
    LocaisRoutingModule
  ]
})
export class LocaisModule { }
