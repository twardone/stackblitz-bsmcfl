import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetireesComponent } from './retirees.component';

describe('RetireesComponent', () => {
  let component: RetireesComponent;
  let fixture: ComponentFixture<RetireesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetireesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetireesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
