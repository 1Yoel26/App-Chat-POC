import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageClient } from './message-client';

describe('MessageClient', () => {
  let component: MessageClient;
  let fixture: ComponentFixture<MessageClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageClient],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageClient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
