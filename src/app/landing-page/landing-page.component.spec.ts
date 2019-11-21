import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { MaterialModule } from '../../app/material';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ LandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve conter o Título do 1º Grid da Aplicação', () => {
    const titleMission = fixture.debugElement.nativeElement;
    expect(titleMission.querySelector('.title-our-mission').innerText).toContain('Nossa Missão');
  });

  it ('Deve conter o Texto do 1º Grid da Aplicação', () => {
    const textMission = fixture.debugElement.nativeElement;
    expect(textMission.querySelector('.text-our-mission').innerText).toContain('A Missão do portal é ser um canal onde entidades que precisam de doações serem visíveis e acessíveis a possíveis doadores. Outro viés do portal é tornar acessível a doação de animais que estão nos abrigos, possibilitando assim que os animais possam ter um lar.');
  });

  it('Deve conter o Título do 2º Grid da Aplicação' , () => {
    const titleHowWorks = fixture.debugElement.nativeElement;
    expect(titleHowWorks.querySelector('.how-works-title').innerText).toContain('Como Funciona?');
  });

  it('Deve conter o Texto do 2º Grid da Aplicação', () => {
    const textHowWorks = fixture.debugElement.nativeElement;
    expect(textHowWorks.querySelector('.description').innerText).toContain(`ADOPET busca ser uma ponte entre o abrigo com os cidadãos e entidades que desejam ajudar.`);
  });
});
