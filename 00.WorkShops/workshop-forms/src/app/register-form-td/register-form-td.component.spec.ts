import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormTDComponent } from './register-form-td.component';

describe('RegisterFormTDComponent', () => {
  let component: RegisterFormTDComponent;
  let fixture: ComponentFixture<RegisterFormTDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormTDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
