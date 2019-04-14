import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-validate-phone',
  templateUrl: './validate-phone.component.html',
  styleUrls: ['./validate-phone.component.scss']
})
export class ValidatePhoneComponent implements OnInit {

  validatePhone: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.validatePhone = this.fb.group({
      valphoneNumber: ['', Validators.required],
      valphoneRegion: ['', Validators.required]
    });
  }
  validatePhoneNumber() {
    console.log(this.validatePhone.value);
    this.authService.valPhoneNum(this.validatePhone.value).subscribe(data => {
      console.log(data);
      setTimeout(() => {
        this.router.navigate(['valPhone']);
      }, 3000 );
    }, err => {
      console.log(err);
     });
  }

}
