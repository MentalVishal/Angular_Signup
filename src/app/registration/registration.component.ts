import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  };

  isSubmitted = false;
  msg = '';

  onSubmit() {
    if (this.user.name == '') {
      this.msg = 'Name is Required';
      alert(this.msg);
    } else if (this.user.name.length < 3) {
      this.msg = 'Name must be at least 3 characters long.';
      alert(this.msg);
    } else if (this.user.email == '') {
      this.msg = 'Email is required.';
      alert(this.msg);
    } else if (this.user.password == '') {
      this.msg = 'Password is required';
      alert(this.msg);
    } else if (this.user.password.length < 8) {
      this.msg = 'Password must be at least 8 characters long.';
      alert(this.msg);
    } else if (!this.passwordStrengthValidator(this.user.password)) {
      this.msg =
        'Password must contain 1 upercase 1 lowercase 1 number 1 special character';
      alert(this.msg);
    } else if (this.user.confirmPassword == '') {
      this.msg = 'Confirm Password is required';
      alert(this.msg);
    } else if (this.user.password != this.user.confirmPassword) {
      this.msg = 'Passwords do not match.';
      alert(this.msg);
    } else if (this.user.phoneNumber == '') {
      this.msg = 'Phone Number is required';
      alert(this.msg);
    } else if (this.user.phoneNumber.length != 10) {
      this.msg = 'Enter a valid Phone Number';
      alert(this.msg);
    } else {
      console.log({ user: this.user });
      this.isSubmitted = true;
      this.msg = '';
      alert(' Registration successful! Thank you for signing up.');
    }

    // this.user = {
    //   name: '',
    //   email: '',
    //   password: '',
    //   confirmPassword: '',
    //   phoneNumber: '',
    // };
  }

  passwordStrengthValidator(control: string) {
    const value = control;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasDigit = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value);

    const isStrongPassword =
      hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;

    return isStrongPassword ? true : false;
  }
}
