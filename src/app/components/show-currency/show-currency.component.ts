import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-show-currency',
  templateUrl: './show-currency.component.html',
  styleUrls: ['./show-currency.component.css']
})

export class ShowCurrencyComponent implements OnInit{
  @Input() currency: string;

  public sign: string;

  constructor( public dataService: DataService) { }

  ngOnInit() {
    switch (this.currency) {
      case 'GBP':
        this.sign = '£';
        break;
      case 'EUR':
        this.sign = '€';
        break;
      default:
        this.sign = '$';
    }
  }
}
