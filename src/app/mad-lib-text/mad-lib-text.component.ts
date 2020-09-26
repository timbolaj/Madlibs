import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from '../form.reducer';

@Component({
  selector: 'app-mad-lib-text',
  templateUrl: './mad-lib-text.component.html',
  styleUrls: ['./mad-lib-text.component.sass']
})
export class MadLibTextComponent implements OnInit {

  appState$: Observable<Object>
  formNumber;
  formValues;

  constructor(
    private store: Store<{form}>
  ) {
    this.appState$ = store.select('form');
   }

  ngOnInit(): void {
    this.appState$.subscribe((res: appState) => {
      this.formValues = res.form;
      this.formNumber = res.numberOfForms;
    })
  }

}
