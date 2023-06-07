import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreViewCoursesComponent } from './more-view-courses.component';

describe('MoreViewCoursesComponent', () => {
  let component: MoreViewCoursesComponent;
  let fixture: ComponentFixture<MoreViewCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreViewCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreViewCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
