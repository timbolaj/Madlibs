import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from '../form.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mad-lib-text',
  templateUrl: './mad-lib-text.component.html',
  styleUrls: ['./mad-lib-text.component.sass']
})
export class MadLibTextComponent implements OnInit {

  appState$: Observable<Object>
  formNumber;
  formValues;
  displayValues = {
    nameOfFriend: '',

  };
  textHeader = ['You ate my dog', 'My dog ate my friend', 'My dog gave birth to my friend']

  constructor(
    private store: Store<{form}>,
    private router: Router,
  ) {
    this.appState$ = store.select('form');
   }

  ngOnInit(): void {
    this.appState$.subscribe((res: appState) => {
      this.formValues = res.form;
      for (const key in this.formValues) {
        if (key[0] !== '[') {
          key !== 'nameOfFriend'
            ? this.displayValues[key] = this.toUpperLowerCase(this.formValues[key], false)
            : this.displayValues[key] = this.toUpperLowerCase(this.formValues[key], true);
        }
      }
      this.formNumber = res.numberOfForms;
    })
  }

  toUpperLowerCase(val: string, upper: boolean): string {
    const modify = val.split('');
    if (upper) {
      modify[0] = modify[0].toUpperCase();
    } else {
      modify[0] = modify[0].toLowerCase();
    }
    return modify.join('');
  }

  handleSubmit(): void {
    // dispatch to store the amount of times the form has been remade
    this.router.navigateByUrl('/form');
  }
}
