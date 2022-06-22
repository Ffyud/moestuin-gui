import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGardenContentFormComponent } from './new-garden-content-form.component';

describe('NewGardenContentFormComponent', () => {
  let component: NewGardenContentFormComponent;
  let fixture: ComponentFixture<NewGardenContentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGardenContentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGardenContentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
