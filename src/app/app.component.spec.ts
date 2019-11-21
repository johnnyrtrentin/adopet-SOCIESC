import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

import { MaterialModule } from '../app/material';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, MaterialModule ],
      declarations: [ AppComponent ],
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
});
