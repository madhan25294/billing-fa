/* tslint:disable:no-unused-variable */
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CommonService } from './common.service';

fdescribe('CommonService', () => {
  let service: CommonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommonService]
    });

    // inject the service
    service = TestBed.get(CommonService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should check  getUsersData method', () => {
    const mockData = {
      name: 'testname',
      description: 'testdesc'
    };

    service.getUsersData()
      .subscribe((response: any) => {
        expect(response).toEqual(mockData);
      });

    // tslint:disable-next-line:max-line-length
    const req = httpMock.expectOne(`https://localhost:44346/api/CustomerInfo`);

    expect(req.request.method).toEqual('GET');

    req.flush(mockData);
  });

});


