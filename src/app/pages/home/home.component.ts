import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Last 30 days evolution in USD';
  columns = ['Day', 'Evol.'];

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
