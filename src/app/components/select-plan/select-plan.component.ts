import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css'],
})
export class SelectPlanComponent {
  @Input() plan: string = 'arcade';
  @Input() period: boolean = false;
  @Output() planChange = new EventEmitter<string>();
  @Output() periodChange = new EventEmitter<boolean>();
  @Output() nextStep = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();

  planOptions = [
    {
      key: 'arcade',
      name: 'Arcade',
      monthlyPrice: '$9/mo',
      yearlyPrice: '$90/yr',
      img: '/assets/images/icon-arcade.svg',
    },
    {
      key: 'advanced',
      name: 'Advanced',
      monthlyPrice: '$12/mo',
      yearlyPrice: '$120/yr',
      img: '/assets/images/icon-advanced.svg',
    },
    {
      key: 'pro',
      name: 'Pro',
      monthlyPrice: '$15/mo',
      yearlyPrice: '$150/yr',
      img: '/assets/images/icon-pro.svg',
    },
  ];

  selectPlan(plan: string) {
    this.plan = plan;
    this.planChange.emit(this.plan);
  }

  togglePeriod() {
    this.period = !this.period;
    this.periodChange.emit(this.period);
  }
}
