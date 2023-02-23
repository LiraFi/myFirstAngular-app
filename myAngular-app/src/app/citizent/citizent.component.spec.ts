import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizentComponent } from './citizent.component';

describe('CitizentComponent', () => {
  let component: CitizentComponent;
  let fixture: ComponentFixture<CitizentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
