import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSupport } from './message-support';

describe('MessageSupport', () => {
  let component: MessageSupport;
  let fixture: ComponentFixture<MessageSupport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageSupport],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageSupport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
