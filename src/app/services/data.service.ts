import { Injectable, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ExchangeData } from '../interfaces/exchange-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /*
    This service handles data and transformates it to meet the controllers needs
  */

  public ExchangePrice: ExchangeData = {USD: '', GBP: '', EUR: '', CNY: ''};
  public HistoricData = [];
  public HistoricPrice = [];
  public StartDate = new Date();
  public EndDate = new Date();
  public isBoot = true;

  constructor(protected apiService: ApiService) { }

  getData(): void {
    // Get the currency exchanges
    this.apiService.getCurrency().subscribe(response => {
      this.ExchangePrice.USD = Number(response.bpi.USD.rate_float.toFixed(2)).toLocaleString('ca-ES');
      this.ExchangePrice.GBP = Number(response.bpi.GBP.rate_float.toFixed(2)).toLocaleString('ca-ES');
      this.ExchangePrice.EUR = Number(response.bpi.EUR.rate_float.toFixed(2)).toLocaleString('ca-ES');
      this.apiService.getCurrencyCny().subscribe(cnyResponse => {
        this.ExchangePrice.CNY = Number(cnyResponse.bpi.CNY.rate_float.toFixed(2)).toLocaleString('ca-ES') + '0';
      });
    });

    // Get the historic data
    this.getHistoric(false);
  }

  getHistoric(isPrice: boolean): void {
    this.apiService.StartDate = this.StartDate;
    this.apiService.EndDate = this.EndDate;
    this.apiService.getHistoric(isPrice).subscribe(response => {
      let tmpArray = [];
      tmpArray = Object.keys(response.bpi).map(i => {
        const tmp = [];
        tmp[0] = i.substring(i.length - 2);
        tmp[1] = response.bpi[i];
        return tmp;
      });
      if (isPrice) {
        this.HistoricPrice = tmpArray;
      } else {
        this.HistoricData = tmpArray;
      }
    });
  }
}
