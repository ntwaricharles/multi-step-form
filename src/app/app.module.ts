import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoFormComponent } from './components/personal-info-form/personal-info-form.component';
import { StepsComponent } from './components/steps/steps.component';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoFormComponent,
    StepsComponent,
    SelectPlanComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
