import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PricingService {
  getPlanPrice(period: boolean, plan: string): string {
    switch (plan) {
      case 'arcade':
        return period ? '$90/yr' : '$9/mo';
      case 'advanced':
        return period ? '$120/yr' : '$12/mo';
      case 'pro':
        return period ? '$150/yr' : '$15/mo';
      default:
        return period ? '$90/yr' : '$9/mo';
    }
  }

  getTotalPrice(
    period: boolean,
    plan: string,
    addOns: {
      name: string;
      monthlyPrice: string;
      yearlyPrice: string;
      selected: boolean;
    }[]
  ): string {
    const planPrice = parseFloat(
      this.getPlanPrice(period, plan).replace(/[$/mo/yr]/g, '')
    );
    const addOnPrice = addOns
      .filter((addOn) => addOn.selected)
      .reduce(
        (acc, addOn) =>
          acc +
          parseFloat(
            (period ? addOn.yearlyPrice : addOn.monthlyPrice).replace(
              /[$/mo/yr]/g,
              ''
            )
          ),
        0
      );
    return period
      ? `$${planPrice + addOnPrice}/yr`
      : `$${planPrice + addOnPrice}/mo`;
  }

  constructor() {}
}
