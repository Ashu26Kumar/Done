import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListYourBusinessComponent } from './list-your-business.component';

describe('ListYourBusinessComponent', () => {
  let component: ListYourBusinessComponent;
  let fixture: ComponentFixture<ListYourBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListYourBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListYourBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
