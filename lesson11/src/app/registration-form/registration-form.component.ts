import { Component, OnInit } from '@angular/core';
import {Form, FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  myGroup : FormGroup;
  firstNumber = new FormControl(1, Validators.required);
  result = new FormControl(2, Validators.required);

  constructor(fb : FormBuilder) {
    this.myGroup = fb.group({
      name : new FormControl('name', Validators.required),
      surname : new FormControl('surname', Validators.required),
      password : new FormControl('', Validators.required),
      firstNumber: this.firstNumber,
      result : this.result
    });

    this.firstNumber.valueChanges
      .filter((valueStr) => parseInt(valueStr) !== NaN)
      .map((valueStr) => parseInt(valueStr))
      .map((number) => number * 2)
      .subscribe( (value) => {
        this.result.patchValue(value);
      })
  }

    ngOnInit() {
    }

  submitForm()
  {
    debugger;
  }
}
