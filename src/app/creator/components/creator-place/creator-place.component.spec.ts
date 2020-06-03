import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorPlaceComponent } from './creator-place.component';

describe('CreatorPlaceComponent', () => {
  let component: CreatorPlaceComponent;
  let fixture: ComponentFixture<CreatorPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
