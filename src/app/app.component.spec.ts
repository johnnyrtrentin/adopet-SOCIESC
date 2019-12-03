import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { AppComponent } from './app.component';

import { MaterialModule } from '../app/material';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ViewAnimalsComponent } from './view-animals/view-animals.component';
import { ViewOngsComponent } from './view-ongs/view-ongs.component';
import { LoginComponent } from './login/login.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AnimalService } from './services/create-animal.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'login', component: AppComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'index', component: LandingPageComponent },
          { path: 'view/animals', component: ViewAnimalsComponent },
          { path: 'view/ongs', component: ViewOngsComponent }
        ])
      ],
      declarations: [
        AppComponent,
        RegisterComponent,
        LandingPageComponent,
        ViewAnimalsComponent,
        ViewOngsComponent,
        LoginComponent
      ],
      providers: [FormBuilder, AnimalService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));

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
    async(inject([Location], (location: Location) => {
      const btnLogin = fixture.debugElement.nativeElement;

      btnLogin.querySelector('#btnLogin').click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/login');
      });
    })));

  it('Deve clicar no botão de "Cadastro" e redirecionar a página',
    async(inject([Location], (location: Location) => {
      const btnRegister = fixture.debugElement.nativeElement;

      btnRegister.querySelector('#btnRegister').click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/register');
      });
    })));

  it('Deve clicar no botão de "Visualização de Animais" e redirecionar a página',
    async(inject([Location], (location: Location) => {
      const btnAnimals = fixture.debugElement.nativeElement;

      btnAnimals.querySelector('#btnAnimals').click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/view/animals');
      });
    })));

  it('Deve clicar no botão de "Visualização de Ong\'s" e redirecionar a página',
    async(inject([Location], (location: Location) => {
      const btnOngs = fixture.debugElement.nativeElement;

      btnOngs.querySelector('#btnOngs').click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/view/ongs');
      });
    })));
});