import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  alertUsername = false;
  alertPassword = false;
  alertFirstName = false;
  alertConfirmPassword = false;
  disableLogin = false;
  showLogin = false;
  buttons: any;
  @HostListener('document:keyup', ['$event'])
  clickout(event) {
    if (event.key === 'Enter') {
      if (!this.disableLogin) {
        this.signUp();
      }
    }
  }
  constructor(
    private router: Router
  ) {
   }

  ngOnInit() {
    this.form.registerControl(
      'firstName',
      new FormControl('', Validators.required)
    );
    this.form.registerControl(
      'lastName',
      new FormControl('')
    );
    this.form.registerControl(
      'username',
      new FormControl('', Validators.required)
    );
    this.form.registerControl(
      'password',
      new FormControl('', Validators.required)
    );
    this.form.registerControl(
      'confirmPassword',
      new FormControl('', Validators.required)
    );
  }

  signUp() {
    if (
      (this.form.controls.username.valid &&
        this.form.controls.username.dirty) === false
    ) {
      this.alertUsername = true;
    } else {
      this.alertUsername = false;
    }
    if (
      (this.form.controls.firstName.valid &&
        this.form.controls.firstName.dirty) === false
    ) {
      this.alertFirstName = true;
    } else {
      this.alertFirstName = false;
    }

    if (
      (this.form.controls.password.valid &&
        this.form.controls.password.dirty) === false
    ) {
      this.alertPassword = true;
    } else {
      this.alertPassword = false;
    }

    if (
      (this.form.controls.confirmPassword.valid &&
        this.form.controls.confirmPassword.dirty) === false
    ) {
      this.alertConfirmPassword = true;
    } else {
      this.alertConfirmPassword = false;
    }

    if (this.alertUsername || this.alertPassword || this.alertConfirmPassword || this.alertFirstName) {
    } else {
        this.router.navigateByUrl('dashboard');
    }
  }
}
