import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bitcoin';

  constructor( public dataService: DataService) { }

  ngOnInit(): void {
    // Load the requested data
    this.dataService.getData();
   }
}
