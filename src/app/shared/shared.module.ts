import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';

import { DateFormatPipe }   from './date-format.pipe';
import { TextEllipsisPipe } from './text-ellipsis.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DateFormatPipe,
    TextEllipsisPipe
  ],
  exports: [
    DateFormatPipe,
    TextEllipsisPipe
  ]
})
export class SharedModule { }
