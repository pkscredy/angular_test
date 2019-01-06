import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkTestComponent } from './pk-test.component';

describe('PkTestComponent', () => {
  let component: PkTestComponent;
  let fixture: ComponentFixture<PkTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
