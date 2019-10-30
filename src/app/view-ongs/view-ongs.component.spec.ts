import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOngsComponent } from './view-ongs.component';

describe('ViewOngsComponent', () => {
  let component: ViewOngsComponent;
  let fixture: ComponentFixture<ViewOngsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOngsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
