import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Form } from '@angular/forms';
import { Store } from '@ngrx/store';
import { reset, save } from '../form.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  invalid: boolean = false;
  form$: Observable<Object>

  constructor(
    private store: Store<{form: Object}>) {
    this.form$ = store.select('form');
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl(''),
      'adjective1': new FormControl(''),
      'adjective2': new FormControl(''),
      'adverb': new FormControl(''),
      'city': new FormControl(''),
      'nameOfFriend': new FormControl(''),
    })
    this.form$.subscribe(res => console.log(res))
  }

  handleSubmit(): void {
    if (!this.form.valid) {
      this.invalid = true;
      return;
    }
    const responses = this.form.value
    this.invalid = false;
    this.store.dispatch(save(responses))
  }
}
