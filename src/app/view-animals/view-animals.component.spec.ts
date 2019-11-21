import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnimalsComponent } from './view-animals.component';
import { MaterialModule } from '../../app/material';

describe('ViewAnimalsComponent', () => {
  let component: ViewAnimalsComponent;
  let fixture: ComponentFixture<ViewAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ ViewAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
