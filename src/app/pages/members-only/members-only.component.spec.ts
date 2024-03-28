import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersOnlyComponent } from './members-only.component';

describe('MembersOnlyComponent', () => {
  let component: MembersOnlyComponent;
  let fixture: ComponentFixture<MembersOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembersOnlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembersOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
