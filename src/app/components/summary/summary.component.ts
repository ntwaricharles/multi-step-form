import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PricingService } from '../../services/pricing.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  @Input() plan: string = 'arcade';
  @Input() period: boolean = false;
  @Input() addOns: {
    name: string;
    monthlyPrice: string;
    yearlyPrice: string;
    description: string;
    selected: boolean;
  }[] = [];
  @Input() totalPrice: string = '';
  @Output() previousStep = new EventEmitter<void>();
  @Output() finish = new EventEmitter<void>();

  constructor(private pricingService: PricingService) {}

  getPlanPrice() {
    return this.pricingService.getPlanPrice(this.period, this.plan);
  }

  getSelectedAddOns() {
    return this.addOns.filter((addOn) => addOn.selected);
  }

  goBack() {
    this.previousStep.emit();
  }

  confirmOrder() {
    this.finish.emit();
  }
}
