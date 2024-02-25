import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvFrameComponent } from './cv-frame.component';

describe('CvFrameComponent', () => {
  let component: CvFrameComponent;
  let fixture: ComponentFixture<CvFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CvFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
