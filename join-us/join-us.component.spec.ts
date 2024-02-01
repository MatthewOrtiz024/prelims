import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinComponent } from './join-us.component';

describe('JoinUsComponent', () => {
  let component: JoinComponent;
  let fixture: ComponentFixture<JoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
