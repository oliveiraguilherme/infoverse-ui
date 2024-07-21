import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MythosComponent } from './mythos.component';

describe('MythosComponent', () => {
  let component: MythosComponent;
  let fixture: ComponentFixture<MythosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MythosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MythosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
