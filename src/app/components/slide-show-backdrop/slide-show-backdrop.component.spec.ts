import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlideShowBackdropComponent } from './slide-show-backdrop.component';

describe('SlideShowBackdropComponent', () => {
  let component: SlideShowBackdropComponent;
  let fixture: ComponentFixture<SlideShowBackdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideShowBackdropComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlideShowBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
