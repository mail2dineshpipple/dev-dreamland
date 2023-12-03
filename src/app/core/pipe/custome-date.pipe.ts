import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Pipe({
  name: 'CustomDatePipe'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: NgbDate, parameter: string): string | null {

    let returnValue :string | null = "";
    let date =  new Date(value.year, value.month-1, value.day);
    
    switch(parameter){
      case "weekday":
          returnValue = new DatePipe('en-US').transform(date,"EEEE");
          break;
      case "month":
        returnValue = new DatePipe('en-US').transform(date,"LLL");
        break;
    }
    
    return returnValue;
  }

}
