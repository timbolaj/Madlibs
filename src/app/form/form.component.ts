import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { save } from '../form.actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
    private router: Router,
    private store: Store<{form: Object}>) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'adjective1': new FormControl(''),
      'adjective2': new FormControl(''),
      'adjective3': new FormControl(''),
      'adjective4': new FormControl(''),
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

    const responses = this.form.value;
    this.store.dispatch(save(responses));
    this.invalid = false;
    this.router.navigateByUrl('/text');
  }
}
