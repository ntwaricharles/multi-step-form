import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
})
export class StepsComponent {
  @Input() currentStep: number = 1;

  steps = [
    { number: 1, label: 'Your info', description: 'Step 1' },
    { number: 2, label: 'Select plan', description: 'Step 2' },
    { number: 3, label: 'Add-ons', description: 'Step 3' },
    { number: 4, label: 'Summary', description: 'Step 4' },
  ];
}
