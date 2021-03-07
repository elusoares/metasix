import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';


@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
