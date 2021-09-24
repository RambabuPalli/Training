import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperThemeComponent } from './hyper-theme.component';

describe('HyperThemeComponent', () => {
  let component: HyperThemeComponent;
  let fixture: ComponentFixture<HyperThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyperThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyperThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
