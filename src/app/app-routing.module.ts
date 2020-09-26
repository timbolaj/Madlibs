import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomePageComponent } from './home-page/home-page.component'
import { MadLibTextComponent } from './mad-lib-text/mad-lib-text.component'

const routes: Routes = [
  { path: 'text', component: MadLibTextComponent },
  { path: 'form', component: FormComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
