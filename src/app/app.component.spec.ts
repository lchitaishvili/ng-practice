import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'test-app'`, () => {
    expect(component.title).toEqual('test-app1');
  });

  it('should change title to test-app2', () => {
    component.changeTitle();
    expect(component.title).toEqual('test-app2');
  });

  it('getSomeString should return appropriate values', () => {
    expect(component.getSomeString()).toEqual('1');

    component.changeTitle();
    expect(component.getSomeString()).toEqual('2');
  });

  it('changeTitle should call someMethod', () => {
    spyOn(component, 'someMethod');
    component.changeTitle();
    expect(component.someMethod).toHaveBeenCalledTimes(1);
  }); 
});
