import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuetionarioComponent } from './cuetionario.component';

describe('CuetionarioComponent', () => {
  let component: CuetionarioComponent;
  let fixture: ComponentFixture<CuetionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuetionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuetionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
