import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarFestivoComponent } from './validar-festivo.component';

describe('ValidarFestivoComponent', () => {
  let component: ValidarFestivoComponent;
  let fixture: ComponentFixture<ValidarFestivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarFestivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarFestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
