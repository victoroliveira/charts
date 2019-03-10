import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textEllipsis'
})
export class TextEllipsisPipe implements PipeTransform {
  private maxLength = 30;

  transform(value: string): string {
    if (value.length > this.maxLength) {
      return value.slice(0, this.maxLength).concat('...');
    }
    return value;
  }

}
