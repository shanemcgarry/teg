import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMarkComponent } from './quiz-mark.component';

describe('QuizMarkComponent', () => {
  let component: QuizMarkComponent;
  let fixture: ComponentFixture<QuizMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
