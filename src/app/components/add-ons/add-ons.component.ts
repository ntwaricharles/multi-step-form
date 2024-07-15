import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.css'],
})
export class AddOnsComponent {
  @Input() addOns!: {
    name: string;
    monthlyPrice: string;
    yearlyPrice: string;
    description: string;
    selected: boolean;
  }[];

  @Input() period!: boolean;

  @Output() previousStep = new EventEmitter<void>();
  @Output() nextStep = new EventEmitter<void>();
  @Output() addOnsChange = new EventEmitter<
    {
      name: string;
      monthlyPrice: string;
      yearlyPrice: string;
      description: string;
      selected: boolean;
    }[]
  >();

  toggleAddOn(index: number, event?: MouseEvent) {
    this.addOns[index].selected = !this.addOns[index].selected;
    this.addOnsChange.emit(this.addOns);
  }

  goToNextStep() {
    this.nextStep.emit();
  }

  goBack() {
    this.previousStep.emit();
  }
}
