import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {

  windowRef: any;

  country: string;
  number: string;

  verificationCode: string;

  user: any;
  constructor(private win: WindowService, public router: Router) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
    const config = {
      apiKey: 'AIzaSyBMLPalR-3FK2TPGKSl8_A11-6pp3Pjuxg',
      authDomain: 'payment-se.firebaseapp.com',
      databaseURL: 'https://payment-se.firebaseio.com',
      projectId: 'payment-se',
      storageBucket: 'payment-se.appspot.com',
      messagingSenderId: '227656865345'
    };
    firebase.initializeApp(config);
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    this.windowRef.recaptchaVerifier.render();
  }

  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.country + this.number;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error => console.log(error) );

  }
  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.user = result.user;
                    this.router.navigate(['register']);

    })
    .catch( error => console.log(error, 'Incorrect code entered?'));
  }

}

// export class PhoneNumber {
//   country: string;
//   number: string;

//   // format phone numbers as E.164
//   get getPhoneNumberFromUserInput() {
//     const num = this.country + this.number;
//     return `+${num}`;
//   }

// }
