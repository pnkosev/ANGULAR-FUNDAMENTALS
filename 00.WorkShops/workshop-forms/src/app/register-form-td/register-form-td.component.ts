import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form-td',
  templateUrl: './register-form-td.component.html',
  styleUrls: ['./register-form-td.component.css']
})
export class RegisterFormTDComponent implements OnInit {
  @ViewChild('regForm') regForm: NgForm;

  phoneCodes: string[] = ['+359', '+33', '+01'];
  jobs: string[] = ['Designer', 'Dev', 'Cook'];

  constructor() { }

  ngOnInit() {
  }

  register() {
    if (this.regForm.valid) {
      this.regForm.reset();
    }
    console.log(this.regForm);
  }
}
