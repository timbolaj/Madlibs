import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadLibTextComponent } from './mad-lib-text.component';

describe('MadLibTextComponent', () => {
  let component: MadLibTextComponent;
  let fixture: ComponentFixture<MadLibTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadLibTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadLibTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
