import { TestBed } from '@angular/core/testing';

import { ApiChat } from './api-chat';

describe('ApiChat', () => {
  let service: ApiChat;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiChat);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
