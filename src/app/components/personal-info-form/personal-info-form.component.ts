import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.css'],
})
export class PersonalInfoFormComponent {
  @Output() nextStep = new EventEmitter<void>();

  // Your existing code...

  onSubmit() {
    // Validate form...
    this.nextStep.emit();
  }
}
