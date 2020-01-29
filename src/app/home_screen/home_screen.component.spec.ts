import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeScreenComponent } from './home_screen.component';

describe('HomeScreenComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HomeScreenComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeScreenComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'codethon'`, () => {
    const fixture = TestBed.createComponent(HomeScreenComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('codethon');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HomeScreenComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('codethon app is running!');
  });
});
