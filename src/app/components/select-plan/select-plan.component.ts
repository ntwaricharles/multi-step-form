import { Component, EventEmitter, Output, Input } from '@angular/core';
import { PricingService } from '../../pricing.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css'],
})
export class SelectPlanComponent {
  @Input() plan: string = 'arcade';
  @Input() period: boolean = false;
  @Output() previousStep = new EventEmitter<void>();
  @Output() nextStep = new EventEmitter<void>();
  @Output() planChange = new EventEmitter<string>();
  @Output() periodChange = new EventEmitter<boolean>();

  constructor(private pricingService: PricingService) {}

  togglePeriod() {
    this.period = !this.period;
    this.periodChange.emit(this.period);
  }

  selectPlan(plan: string) {
    this.plan = plan;
    this.planChange.emit(this.plan);
  }

  goBack() {
    this.previousStep.emit();
  }

  goToNextStep() {
    this.nextStep.emit();
  }

  getPlanPrice(plan: string) {
    return this.pricingService.getPlanPrice(this.period, plan);
  }
}
