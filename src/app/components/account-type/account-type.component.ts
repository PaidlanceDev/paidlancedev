import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormBuilder, FormControl, FormsModule, NgForm, ReactiveFormsModule, Validators } from "@angular/forms";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import {
	MAT_RADIO_DEFAULT_OPTIONS,
	MatRadioModule,
} from "@angular/material/radio";
import { MatFormField } from "@angular/material/form-field";
import {MatStepperModule} from '@angular/material/stepper'
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-account-type',
  standalone: true,
  imports: [
		FormsModule,
		ReactiveFormsModule,
		RouterLink,
		MatCardModule,
		MatRadioModule,
    MatFormField,
    MatStepperModule,
    MatInputModule,
		MatButtonModule,
    MatCheckboxModule,
		MatIconModule,
	],
  providers: [
		{
			provide: MAT_RADIO_DEFAULT_OPTIONS,
			useValue: { color: "primary" },
		},
	],
  templateUrl: './account-type.component.html',
  styleUrl: './account-type.component.scss'
})
export class AccountTypeComponent implements OnInit {
  selection: string = "";
  paidlancerJoin: boolean = false;
  clientJoin: boolean = false;
  selectionMade: boolean = false;
  private _formBuilder = inject(FormBuilder)
  email = new FormControl('', [Validators.required, Validators.email]);
  acceptTOS = new FormControl(false, Validators.requiredTrue);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  ngOnInit(): void {
    this.paidlancerJoin = false;
    this.clientJoin = false;
    this.selectionMade = false;
  }

  onTalentJoin() {
    this.paidlancerJoin = true;
    this.selectionMade = true;
    this.clientJoin = false;
  }

  onClientJoin() {
    this.paidlancerJoin = false;
    this.selectionMade = true;
    this.clientJoin = true;
  }

  clearSelection() {
    this.paidlancerJoin = false;
    this.clientJoin = false;
    this.selectionMade = false;
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      // Form is valid, proceed with form submission
      console.log("Form submitted successfully!");
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getTOSErrorMessage() {
    if (this.acceptTOS.hasError('required')) {
      return 'You must accept the Terms of Service.';
    }

    return '';
  }
}
