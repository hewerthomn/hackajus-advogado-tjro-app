import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeticaoInicialPage } from './peticao-inicial.page';

describe('PeticaoInicialPage', () => {
  let component: PeticaoInicialPage;
  let fixture: ComponentFixture<PeticaoInicialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticaoInicialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeticaoInicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
