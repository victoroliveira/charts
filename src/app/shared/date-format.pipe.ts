import { Pipe, PipeTransform }  from '@angular/core';
import * as moment              from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  private pattern = 'DD/MM/YYYY HH:mm';

  /**
   * Recieve a unformated date and parse to DD/MM/YYYY HH:mm format
   * @param value Unformated date
   * @returns {string} Date and time in format DD/MM/YYYY HH:mm
   */
  transform(value: string | Date): string {
    return moment(value).format(this.pattern);
  }

}
