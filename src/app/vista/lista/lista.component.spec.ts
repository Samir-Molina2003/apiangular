import { TestBed } from '@angular/core/testing';
import { ListaComponent } from '../lista/lista.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListaComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ListaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'project'`, () => {
    const fixture = TestBed.createComponent(ListaComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ListaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('project app is running!');
  });
});
