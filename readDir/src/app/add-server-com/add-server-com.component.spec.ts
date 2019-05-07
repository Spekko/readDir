import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServerComComponent } from './add-server-com.component';

describe('AddServerComComponent', () => {
  let component: AddServerComComponent;
  let fixture: ComponentFixture<AddServerComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServerComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServerComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
