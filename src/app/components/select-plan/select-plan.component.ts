import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css'],
})
export class SelectPlanComponent {
  @Output() previousStep = new EventEmitter<void>();
  @Output() nextStep = new EventEmitter<void>();

  plan: string = 'arcade';
  period: boolean = false;
  monthlyPrices: string[] = ['$9/mo', '$12/mo', '$15/mo'];
  yearlyPrices: string[] = ['$90/yr', '$120/yr', '$150/yr'];

  togglePeriod() {
    this.period = !this.period;
  }

  goBack() {
    this.previousStep.emit();
  }

  goToNextStep() {
    this.nextStep.emit();
  }
}
