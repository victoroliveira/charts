import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textEllipsis'
})
export class TextEllipsisPipe implements PipeTransform {
  private maxLength = 30;

  /**
   * Recieve a string and concat ellipsis if string length is greater than 30
   * @param value String to be ellipsed
   * @returns {string} Ellipsed string
   */
  transform(value: string): string {
    if (value && value.length > this.maxLength) {
      return value.slice(0, this.maxLength).concat('...');
    }
    return value;
  }

}
