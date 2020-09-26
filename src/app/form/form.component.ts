import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, Form } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  invalid: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl(''),
      'adjective1': new FormControl(''),
      'adjective2': new FormControl(''),
      'adverb': new FormControl(''),
      'city': new FormControl(''),
      'nameOfFriend': new FormControl(''),
    })
  }

  handleSubmit(): void {
    if (!this.form.valid) {
      this.invalid = true;
      return;
    }
    this.invalid = false;
  }
}
