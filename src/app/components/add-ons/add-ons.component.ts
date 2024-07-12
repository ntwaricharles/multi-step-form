import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.css'],
})
export class AddOnsComponent {
  @Output() previousStep = new EventEmitter<void>();
  @Output() nextStep = new EventEmitter<void>();

  addOns: { name: string; price: string; selected: boolean }[] = [
    { name: 'Online service', price: '$1/mo', selected: false },
    { name: 'Larger storage', price: '$2/mo', selected: false },
    { name: 'Customizable profile', price: '$2/mo', selected: false },
  ];

  toggleAddOn(index: number) {
    this.addOns[index].selected = !this.addOns[index].selected;
  }

  goBack() {
    this.previousStep.emit();
  }

  goToNextStep() {
    this.nextStep.emit();
  }
}
