import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveCounselComponent } from './executive-counsel.component';

describe('ExecutiveCounselComponent', () => {
  let component: ExecutiveCounselComponent;
  let fixture: ComponentFixture<ExecutiveCounselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveCounselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExecutiveCounselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
