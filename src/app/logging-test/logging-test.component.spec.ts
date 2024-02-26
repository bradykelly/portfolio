import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingTestComponent } from './logging-test.component';

describe('LoggingTestComponent', () => {
  let component: LoggingTestComponent;
  let fixture: ComponentFixture<LoggingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggingTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
