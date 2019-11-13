import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({  
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  emailField = new FormControl('', [Validators.required]);
  passwordField = new FormControl('', [Validators.required]);


  public logar_click() {
  }
  ngOnInit() {
    // this.router.navigate([])
  }
}
