import { Component } from '@angular/core';
import { PricingService } from './services/pricing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentStep: number = 1;
  period: boolean = false;
  plan: string = 'arcade';
  addOns: {
    name: string;
    monthlyPrice: string;
    yearlyPrice: string;
    description: string;
    selected: boolean;
  }[] = [
    {
      name: 'Online service',
      monthlyPrice: '$1/mo',
      yearlyPrice: '$10/yr',
      description: 'Access to multiplayer games',
      selected: false,
    },
    {
      name: 'Larger storage',
      monthlyPrice: '$2/mo',
      yearlyPrice: '$20/yr',
      description: 'Extra 1TB of cloud save',
      selected: false,
    },
    {
      name: 'Customizable profile',
      monthlyPrice: '$2/mo',
      yearlyPrice: '$20/yr',
      description: 'Custom theme on your profile',
      selected: false,
    },
  ];

  constructor(private pricingService: PricingService) {}

  getTotalPrice() {
    return this.pricingService.getTotalPrice(
      this.period,
      this.plan,
      this.addOns
    );
  }

  goToNextStep() {
    this.currentStep++;
  }

  goToPreviousStep() {
    this.currentStep--;
  }

  finishSignup() {
    // Handle order confirmation logic here
  }
}
