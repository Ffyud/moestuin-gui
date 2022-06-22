import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGardenGridComponent } from './my-garden-grid.component';

describe('MyGardenGridComponent', () => {
  let component: MyGardenGridComponent;
  let fixture: ComponentFixture<MyGardenGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGardenGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGardenGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
