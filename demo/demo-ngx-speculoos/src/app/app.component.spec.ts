import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ComponentTester, speculoosMatchers} from 'ngx-speculoos';

class AppComponentTester extends ComponentTester<AppComponent> {

  constructor() {
    super(AppComponent);
    this.detectChanges();
  }

  get title() {
    return this.element('h1');
  }

}

describe('AppComponent', () => {

  let tester: AppComponentTester;

  beforeEach(() => jasmine.addMatchers(speculoosMatchers));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    tester = new AppComponentTester();
  }));

  it('should create the app', async(() => {
    expect(tester.componentInstance).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    expect(tester.title).toContainText('Welcome to app!');
  }));

});
