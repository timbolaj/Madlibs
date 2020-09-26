import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, Form } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadText, saveText, reset } from '../form.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  invalid: boolean = false;
  form$: Observable<object>

  constructor(
    private store: Store<{ form: object }>)
  {
    this.form$ = this.store.select('form');
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
    this.store.dispatch(loadText())
  }

  handleSubmit(): void {
    if (!this.form.valid) {
      this.invalid = true;
      return;
    }
    this.invalid = false;
  }
}
