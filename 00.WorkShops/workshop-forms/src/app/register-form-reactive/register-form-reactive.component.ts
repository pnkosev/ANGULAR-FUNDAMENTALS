import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form-reactive',
  templateUrl: './register-form-reactive.component.html',
  styleUrls: ['./register-form-reactive.component.css']
})
export class RegisterFormReactiveComponent implements OnInit {
  form;
  passwords;
  phoneCodes: string[] = ['+359', '+33', '+01'];
  jobs: string[] = ['Designer', 'Dev', 'Cook'];

  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+/)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/\d{9}/)]],
      job: ['', [Validators.required]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.pattern(/\w{3,16}/)]],
        repeatPass: ['', [Validators.required, Validators.pattern(/\w{3,16}/)]],
      }, { validator: this.passwordMatchValidator }),
      imageUrl: ['', [Validators.required, this.validateImageURL]]
    });
  }

  validateImageURL(frm: FormControl) {
    return (frm.value.length === 0 && !frm.touched)
      || (frm.value.startsWith('http') && (frm.value.endsWith('png') || frm.value.endsWith('jpg'))) ? null : { invalidUrl: true };
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls.password.value === frm.controls.repeatPass.value
      ? null
      : { invalidMatch: true };
    // if (frm.controls.repeatPass.touched && frm.controls.repeatPass.value.length === 0) {
    //   return frm.controls.repeatPass.setErrors({required: true});
    // } else if (frm.controls.repeatPass.value.length === 0 && frm.controls.password.value !== frm.controls.repeatPass.value) {
    //   return frm.controls.repeatPass.setErrors({required: true, invalidMatch: true});
    // } else if (frm.controls.repeatPass.value.length !== 0 && frm.controls.password.value !== frm.controls.repeatPass.value) {
    //   return frm.controls.repeatPass.setErrors({invalidMatch: true});
    // } else {
    //   return null;
    // }
  }

  submitRegister() {
    console.log(this.form);
    if (this.form.valid) {
      this.form.reset();
    }
  }

  get f() {
    return this.form.controls;
  }

}
