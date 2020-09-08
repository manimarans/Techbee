import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  alertUsername = false;
  alertPassword = false;
  disableLogin = false;
  showLogin = false;
  buttons: any;
  @HostListener('document:keyup', ['$event'])
  clickout(event) {
    if (event.key === 'Enter') {
      if (!this.disableLogin) {
        this.submit();
      }
    }
  }
  constructor(
    private router: Router
  ) {
   }

  ngOnInit() {
    this.form.registerControl(
      'username',
      new FormControl('', Validators.required)
    );
    this.form.registerControl(
      'password',
      new FormControl('', Validators.required)
    );
  }

  submit() {
    if (
      (this.form.controls.username.valid &&
        this.form.controls.username.dirty) === false
    ) {
      this.alertUsername = true;
    } else {
      this.alertUsername = false;
    }

    if (
      (this.form.controls.password.valid &&
        this.form.controls.password.dirty) === false
    ) {
      this.alertPassword = true;
    } else {
      this.alertPassword = false;
    }

    if (this.alertUsername || this.alertPassword) {
      let message = 'Please enter user credentials';
      if (this.alertUsername && !this.alertPassword) {
        message = 'Please enter username';
      }

      if (!this.alertUsername && this.alertPassword) {
        message = 'Please enter password';
      }
    }
    else {
      this.router.navigateByUrl('dashboard');

      // this.loginService.authenticate(this.form.value, res => {
      //   const loginErrToast = new Toast();
      //   loginErrToast.message = res.errorDescription;
      //   loginErrToast.state = 2;
      //   this.helper.toast(loginErrToast, () => {
      //     this.disableLogin = false;
      //   });
      // });
    }
  }
  signUp() {
    this.router.navigateByUrl('sign-up');
  }
  

}
