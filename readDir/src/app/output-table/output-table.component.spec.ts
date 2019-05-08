import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollDispatchModule, ScrollDispatcher } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';

import { OutputTableComponent } from './output-table.component';

describe('OutputTableComponent', () => {
  let component: OutputTableComponent;
  let fixture: ComponentFixture<OutputTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputTableComponent ],
	  providers: [ ScrollDispatcher ],
	  imports: [ScrollDispatchModule, CommonModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
