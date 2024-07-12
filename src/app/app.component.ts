import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentStep: number = 1;

  goToNextStep() {
    this.currentStep += 1;
  }

  goToPreviousStep() {
    this.currentStep -= 1;
  }
}
