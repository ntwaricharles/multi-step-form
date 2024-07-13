import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentStep: number = 1;

  plan: string = 'arcade';
  period: boolean = false;
  addOns: { name: string; price: string; selected: boolean }[] = [
    { name: 'Online service', price: '$1/mo', selected: false },
    { name: 'Larger storage', price: '$2/mo', selected: false },
    { name: 'Customizable profile', price: '$2/mo', selected: false },
  ];

  goToNextStep() {
    this.currentStep += 1;
  }

  goToPreviousStep() {
    this.currentStep -= 1;
  }

  finishSignup() {
    // Finalize signup process
    console.log('Signup finished');
  }
}
