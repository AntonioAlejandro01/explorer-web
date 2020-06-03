import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosRutaComponent } from './datos-ruta.component';

describe('DatosRutaComponent', () => {
  let component: DatosRutaComponent;
  let fixture: ComponentFixture<DatosRutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosRutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
