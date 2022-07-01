import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingformsComponent } from './handlingforms.component';

describe('HandlingformsComponent', () => {
  let component: HandlingformsComponent;
  let fixture: ComponentFixture<HandlingformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlingformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandlingformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
