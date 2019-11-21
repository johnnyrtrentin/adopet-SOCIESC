import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  nomeField = new FormControl('', [Validators.required]);
  sobrenomeField = new FormControl('', [Validators.required]);
  emailField = new FormControl('', [Validators.required]);
  passwordField = new FormControl('', [Validators.required]);
  foneField = new FormControl('', [Validators.required]);
  cnpjField = new FormControl('', [Validators.required]);


  public cadastrar_click() {
  }
  ngOnInit() {
    // this.router.navigate([])
  }
}

