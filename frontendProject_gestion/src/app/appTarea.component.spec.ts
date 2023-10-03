import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppTareaComponent } from './appTarea.component';


describe('AppTareaComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppTareaComponent]
  }));

  it('should create the appTarea', () => {
    const fixture = TestBed.createComponent(AppTareaComponent);
    const appTarea = fixture.componentInstance;
    expect(appTarea).toBeTruthy();
  });

  it(`should have as title 'frontendProject_gestion'`, () => {
    const fixture = TestBed.createComponent(AppTareaComponent);
    const appTarea = fixture.componentInstance;
    expect(appTarea.title).toEqual('frontendProject_gestion');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppTareaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('frontendProject_gestion appTarea is running!');
  });
});
