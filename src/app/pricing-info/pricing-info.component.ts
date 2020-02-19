import { Component, OnInit } from '@angular/core';
import { PricingService } from './../services/pricing.service';
import { MasterDataService } from './../services/master-data.service';

@Component({
  selector: 'app-pricing-info',
  templateUrl: './pricing-info.component.html',
  styleUrls: ['./pricing-info.component.scss']
})
export class PricingInfoComponent implements OnInit {
  constructor( private ps: PricingService,
               private md: MasterDataService ) {}
  features: object;
  data: object;
  ngOnInit() {
    this.features = this.ps.GetPricingData();
    this.data = this.md.getAllData();
  }
}
