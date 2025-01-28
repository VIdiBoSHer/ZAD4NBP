import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService],
    });

    service = TestBed.inject(CurrencyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const apiUrl = 'http://localhost:6002/';

  it('should get currency codes', () => {
    const currencyCodes = ['GBP', 'AUD', 'CAD'];
    service.getCurrencyCodes().subscribe((data) => {
      expect(data).toEqual(currencyCodes);
    });

    const req = httpMock.expectOne(apiUrl + 'get-currency-codes/');
    expect(req.request.method).toBe('GET');
    req.flush(currencyCodes);
  });

  it('should get currency details', () => {
    const currencyDetails = { code: 'GBP', rate: 0.85 };
    service.getCurrencyDetails('GBP', '2021-01-01', '2021-12-31').subscribe((data) => {
      expect(data).toEqual(currencyDetails);
    });

    const req = httpMock.expectOne(apiUrl + 'get-currency-details/GBP/2021-01-01/2021-12-31');
    expect(req.request.method).toBe('GET');
    req.flush(currencyDetails);
  });

  it('should update rates', () => {
    const rates = [{ code: 'AUD', rate: 1.4 }];
    service.updateRates().subscribe((data) => {
      expect(data).toEqual(rates);
    });

    const req = httpMock.expectOne(apiUrl + 'update-rates/');
    expect(req.request.method).toBe('GET');
    req.flush(rates);
  });
});
