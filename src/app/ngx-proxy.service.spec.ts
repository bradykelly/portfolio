import { TestBed } from '@angular/core/testing';

import { NgxProxyService } from './ngx-proxy.service';

describe('NgxProxyService', () => {
  let service: NgxProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
