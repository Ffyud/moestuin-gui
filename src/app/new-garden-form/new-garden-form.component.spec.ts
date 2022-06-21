import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGardenFormComponent } from './new-garden-form.component';

describe('NewGardenFormComponent', () => {
  let component: NewGardenFormComponent;
  let fixture: ComponentFixture<NewGardenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGardenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGardenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
