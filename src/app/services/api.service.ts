import { Injectable } from '@angular/core';
import { ExchangeData } from '../interfaces/exchange-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  /*
    This service handles the http get requests.
    It not modificate the data received, sending it as is

  */

  public EndDate = new Date();    // End date for Analysis
  public StartDate = new Date();  // Start date for Analysis

  private histEnd = new Date();   // End date for home
  private histStart = new Date((new Date()).setDate(this.histEnd.getDate() - 30));  // Start date for home (30 days before endDate)

  private currencyUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';          // URL to web api for USD, GBP & EUR rate
  private currencyCnyUrl = 'https://api.coindesk.com/v1/bpi/currentprice/CNY.json';   // URL to CNY rate
  public historicUrl = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=';

  /* Part of the test with coingecko.com
   private priceEvolutionUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=';

   public StartDate = this.sumarDias(new Date(), -30) / 1000; // new Date((new Date()).getDate() - 30).getTime() / 1000; // 30 days ago
   public EndDate = new Date().getTime() / 1000; // Dates must be in Unix TimeStamp format to call the API
  */

  constructor(private http: HttpClient) {}

  private formatDate(data: any): string {
    const month = (data.getMonth() + 1).toString().length < 2 ? '0' + (data.getMonth() + 1).toString() : (data.getMonth() + 1).toString();
    const day = data.getDate().toString().length < 2 ? '0' + data.getDate().toString() : data.getDate().toString();
    return data.getFullYear() + '-' + month + '-' + day;
  }

  private getHistoricUrl(start, end): string {
    const st = this.formatDate(start);
    const en = this.formatDate(end);
    return this.historicUrl + st + '&end=' + en;
  }

  public getCurrency(): Observable<any> {
    return this.http.get(this.currencyUrl);
  }

  public getCurrencyCny(): Observable<any> {
    return this.http.get(this.currencyCnyUrl);
  }

  public getHistoric(isPrice: boolean): Observable<any> {
    if (isPrice) {
      return this.http.get(this.getHistoricUrl (this.StartDate, this.EndDate));
    } else {
      return this.http.get(this.getHistoricUrl(this.histStart, this.histEnd));
    }
  }

  // Tried to find a free API to get the historical price evolution, but I can't find any
  // I have been trying it with coingecko.com, but the results were not correct, in a query
  // with an Start and End date, it returned data outside the date range provided

}
