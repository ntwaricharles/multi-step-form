import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.css'],
})
export class PersonalInfoFormComponent {
  @Output() nextStep = new EventEmitter<void>();

  personalInfoForm: FormGroup; 

  constructor(private formBuilder: FormBuilder) {
    this.personalInfoForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
    });
  }

  // Getter functions for easy access to form controls
  get name() {
    return this.personalInfoForm.get('name');
  }
  get email() {
    return this.personalInfoForm.get('email');
  }
  get phoneNumber() {
    return this.personalInfoForm.get('phoneNumber');
  }

  goToNextStep() {
    if (this.personalInfoForm.valid) {
      this.nextStep.emit();
    } else {
      this.personalInfoForm.markAllAsTouched();
    }
  }
}
