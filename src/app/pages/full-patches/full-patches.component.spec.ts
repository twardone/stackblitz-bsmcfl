import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPatchesComponent } from './full-patches.component';

describe('FullPatchesComponent', () => {
  let component: FullPatchesComponent;
  let fixture: ComponentFixture<FullPatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullPatchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullPatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
