import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlideShowsParesComponent } from './slide-shows-pares.component';

describe('SlideShowsParesComponent', () => {
  let component: SlideShowsParesComponent;
  let fixture: ComponentFixture<SlideShowsParesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideShowsParesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlideShowsParesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
