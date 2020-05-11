import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  columns = ['Days', 'Evol.'];
  startDate;
  endDate;
  title = 'Bitcoin Analysis';
  errors = {
    errEndGTStart: false,
    errRng0: false,
    errRngMax: false
  };

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    if (this.dataService.isBoot) {
      this.doBoot();
    }
    this.dataService.getHistoric(true);
    this.startDate = this.dataService.StartDate;
    this.endDate = this.dataService.EndDate;
  }

  private doBoot() {
    // Set the start and end dates for the first run
    this.dataService.EndDate = new Date();
    this.dataService.StartDate.setDate(this.dataService.EndDate.getDate() - 30);
    this.dataService.isBoot = false;
  }

  private setError(error: string): void {
    // Basic error handler
    for (const prop in this.errors) {
      if (prop === error) {
        this.errors[prop] = true;
      } else {
        this.errors[prop] = false;
      }
    }
  }

  changeEvent(event){
    // Set the dates
    if (event.targetElement.id === 'dp1') {
      this.startDate = event.value;
    } else {
      this.endDate = event.value;
    }
  }

  update(){
    console.log('Update!');
    const diff = this.startDate.getTime() - this.endDate.getTime();
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays > 0) {
      this.setError('errEndGTStart');
    } else if (diffDays === 0) {
      this.setError('errRng0');
    } else if (diffDays < -365) {
      this.setError('errRngMax');
    } else {
      this.setError('none');
      // Update the data service dates
      this.dataService.StartDate = this.startDate;
      this.dataService.EndDate = this.endDate;
      this.dataService.getHistoric(true);
    }
  }

}
