import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedCardComponent } from './assigned-card.component';

describe('AssignedCardComponent', () => {
  let component: AssignedCardComponent;
  let fixture: ComponentFixture<AssignedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignedCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
