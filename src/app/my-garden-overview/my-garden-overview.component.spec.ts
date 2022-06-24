import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGardenOverviewComponent } from './my-garden-overview.component';

describe('MyGardenOverviewComponent', () => {
  let component: MyGardenOverviewComponent;
  let fixture: ComponentFixture<MyGardenOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGardenOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGardenOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
