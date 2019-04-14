import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.signupForm = this.fb.group({
      email: ['', [ Validators.email, Validators.required ]],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      phoneRegion: ['', Validators.required]
    });
  }
  signupUser() {
    console.log(this.signupForm.value);
    this.authService.registerUser(this.signupForm.value).subscribe(data => {
      console.log(data);
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 3000 );
      this.signupForm.reset();
    }, err => {
      console.log(err);
     });
  }

}
