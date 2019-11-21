import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AppComponent } from './app.component';

import { MaterialModule } from '../app/material';
import { By } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ViewAnimalsComponent } from './view-animals/view-animals.component';
import { ViewOngsComponent } from './view-ongs/view-ongs.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, RegisterComponent, LandingPageComponent, ViewAnimalsComponent, ViewOngsComponent,
        RouterTestingModule.withRoutes([
          { path: 'login', component: AppComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'index', component: LandingPageComponent },
          { path: 'view/animais', component: ViewAnimalsComponent },
          { path: 'view/ongs', component: ViewOngsComponent }
        ])
      ],
      declarations: [AppComponent, RegisterComponent, LandingPageComponent, ViewAnimalsComponent, ViewOngsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o aplicativo', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Deve conter o titulo do aplicativo 'adopet-web'`, () => {
    const appTitle = fixture.debugElement.componentInstance;
    expect(appTitle.title).toEqual('adopet-web');
  });

  it('Deve renderizar o título da aba da página', () => {
    const appTabTitle = fixture.debugElement.nativeElement;
    expect(appTabTitle.querySelector('.name-website').textContent).toContain('ADOPET');
  });

  it('Deve clicar no botão de "Login" e redirecionar a página',
    async(inject([Router, Location], (router: Router, location: Location) => {
      const btnLogin = fixture.debugElement.nativeElement;

      btnLogin.querySelector('#btnLogin').click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/login');
      });
    })));
    
  it('Deve clicar no botão de "Cadastro" e redirecionar a página', 
    async(inject([Router, Location], (router: Router, location: Location) => {
      const btnRegister = fixture.debugElement.nativeElement;

      btnRegister.querySelector('#btnRegister').click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/register');
      });
  })));
});