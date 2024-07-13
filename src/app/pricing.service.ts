import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PricingService {
  getPlanPrice(period: boolean): string {
    return period ? '$90/yr' : '$9/mo'; // Placeholder logic
  }

  getTotalPrice(
    period: boolean,
    addOns: { name: string; price: string; selected: boolean }[]
  ): string {
    const planPrice = period ? 90 : 9; 
    const addOnPrice = addOns
      .filter((addOn) => addOn.selected)
      .reduce(
        (acc, addOn) => acc + parseFloat(addOn.price.replace(/[$/mo/yr]/g, '')),
        0
      );
    return period
      ? `$${planPrice + addOnPrice}/yr`
      : `$${planPrice + addOnPrice}/mo`;
  }

  constructor() {}
}
