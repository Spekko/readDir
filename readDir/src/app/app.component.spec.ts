import { TestBed, async } from '@angular/core/testing';
import {ScrollDispatchModule, ScrollDispatcher} from '@angular/cdk/scrolling';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { AddServerComponent } from './add-server-com/add-server-com.component';
import { OutputTableComponent } from './output-table/output-table.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
		AddServerComponent,
		OutputTableComponent
      ],
	  providers: [ScrollDispatcher],
	  imports: [ScrollDispatchModule, CommonModule],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'readDir'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('readDir');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to readDir!');
  });
});
