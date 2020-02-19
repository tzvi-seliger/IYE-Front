/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MasterDataService } from './master-data.service';

describe('Service: MasterData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterDataService]
    });
  });

  it('should ...', inject([MasterDataService], (service: MasterDataService) => {
    expect(service).toBeTruthy();
  }));
});
