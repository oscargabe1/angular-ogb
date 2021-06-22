import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'investmentReturn'
})
export class InvestmentReturnPipe implements PipeTransform {

  transform(value: number, rate: number = 10, days: number = 30, taxes: number = 1): any {

    let yearlyReturn = value * (rate / 100);
    const taxTotal = value * (taxes / 100);

    yearlyReturn -= taxTotal;

    const dailyReturn = yearlyReturn / 360;
    const actualReturn = dailyReturn * days;

    return Math.round((actualReturn + Number.EPSILON) * 100) / 100
  }

}


