import { Component, EventEmitter, Output, Input } from '@angular/core';
import { PricingService } from '../../pricing.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  @Input() plan: string = '';
  @Input() period: boolean = false;
  @Input() addOns: { name: string; price: string; selected: boolean }[] = [];

  constructor(private pricingService: PricingService) {}

  getPlanPrice(): string {
    return this.pricingService.getPlanPrice(this.period);
  }

  getTotalPrice(): string {
    return this.pricingService.getTotalPrice(this.period, this.addOns);
  }

  goBack() {
    // Emit event to go back
    // this.previousStep.emit();
  }

  finishSignup() {
    // Emit event to finish signup
    // this.finish.emit();
  }
}
