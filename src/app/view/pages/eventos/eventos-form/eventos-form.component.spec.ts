import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosFormComponent } from './eventos-form.component';

describe('EventosFormComponent', () => {
  let component: EventosFormComponent;
  let fixture: ComponentFixture<EventosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosFormComponent]
    });
    fixture = TestBed.createComponent(EventosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
