//import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { TrmService } from './trm.service';

describe('TrmService', () => {
  let service: TrmService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [
      TrmService, HttpService
    ],
  imports: [
    HttpClientTestingModule
  ]});
    service = TestBed.inject(TrmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
